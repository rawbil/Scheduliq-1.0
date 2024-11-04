const express = require('express');
const route = express.Router();
const attendanceModel = require('../models/attendanceModel');

//POST attendance/mark
route.post('/mark', async(req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Error marking attendance"});
    }
})


module.exports = route;