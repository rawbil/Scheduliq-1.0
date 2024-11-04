const express = require('express');
const app = express();
require('dotenv').config({path: "./config/.env"})
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const dbConnection = require('./dbConnection');
dbConnection();
//routes
const studentRoute = require('./routes/studentRoute');
const authRoute = require('./routes/authRoute');
const eventRoute = require('./routes/eventRoute');
const libraryRoute = require('./routes/libraryRoute');
const announcementRoute = require('./routes/announcementRoute');

//END OF IMPORTS

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/students', studentRoute);
app.use('/events', eventRoute);
app.use('/library', libraryRoute);
app.use('/users', authRoute);
app.use('/announcemnts', announcementRoute);
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