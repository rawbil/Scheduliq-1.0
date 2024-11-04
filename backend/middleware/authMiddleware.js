const jwt = require('jsonwebtoken');

 const blacklistedTokens = new Set();
const authMiddleware = async(req, res, next) => {
   
    try {
        const authHeader = req.header("Authorization");
        const token = authHeader && authHeader.startsWith("Bearer ") ? authHeader.spit("")[1] : null;
        if(!token) {
            return res.status(403).json({message: "Authentication failed"});
        }

        if(blacklistedTokens.has(token)) {
            return res.status(404).json({message: "Token Invalidated"});
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err) {
                return res.status(404).json({message: "Authentication Error"})
            }

            req.user = user;
            req.token = token;
        });

        next();        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Authentication error"});
    }
}

module.exports = {authMiddleware, blacklistedTokens};