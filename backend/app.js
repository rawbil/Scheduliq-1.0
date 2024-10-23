const express = require('express');
const app = express();
require('dotenv').config({ path: './config/.env' });
const PORT = process.env.PORT || 8000;
//mongoose;
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log(`Database connected: ${mongoose.connection.host}`)
})
.catch(error => console.log(error))
//routes
const studentRoute = require('./routes/studentRoute');

//END OF IMPORTS

app.use('/students', studentRoute);

//test route
app.use('/', (req, res) => {
    res.send("Hi honey I'm home!");
})

//! error page
app.use((req, res) => {
    res.send("oops... 404 error");
})

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
}) 