const express = require('express');
const router = express.Router();
const attendanceModel = require('../models/attendanceModel');

//POST attendance/mark
/* route.post('/mark', async(req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Error marking attendance"});
    }
}) */

//create a new attendance record
//POST /attendance
router.post('/attendance', async(req, res) => {
    try {
        const {student, status} = req.body;
        //validate that status is one of the allowed values
        if(!["Present", "Absent", "Absent With Apology"].includes(status)) {
            return res.status(400).json({message: "Invalid status value"});
        }

        const newAttendance = await attendanceModel.create({
            student, 
            status
        });  

        res.status(201).json({message: "Attendance recorded successfully", newAttendance})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error adding attendance"});
    }
});

//get all attendance records
router.get('/get', async(req, res) => {
    try {
        const attendanceRecords = await attendanceModel.find().populate('student', 'name registrationNo')
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error fetching student attendance"});
    }
})


module.exports = router;