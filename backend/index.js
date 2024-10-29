const express = require('express');
const app = express();
require('dotenv').config({path: "./config/.env"})
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log(`Database connected: ${mongoose.connection.host}`))
.catch(error => console.log(error));
//routes
const studentRoute = require('./routes/studentRoute');

//END OF IMPORTS

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/student', studentRoute);
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