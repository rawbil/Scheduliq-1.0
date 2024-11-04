const mongoose = require("mongoose");
const dbConnection = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log(`Database connected: ${mongoose.connection.host}`))
    .catch((error) => console.log(error));
};

module.exports = dbConnection;