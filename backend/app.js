const express = require('express');
const app = express();
require('dotenv').config({ path: './config/.env' });

//! error page
app.use((req, res) => {
    res.send("oops... 404 error");
})

app.listen(5000, () => {
    console.log(`Server is listening on port 5000`);
}) 