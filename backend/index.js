const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


//END OF IMPORTS

//default page
app.get("/", (req, res) => {
    res.send('Welcome to the home page');
})

//error page
app.use((req, res) => {
    res.send("404 error... Not Found");
})

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
})