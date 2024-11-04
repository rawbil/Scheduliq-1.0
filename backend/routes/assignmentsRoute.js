const express = require('express');
const route = express.Router();
const assignmentsModel = require('../models/assignmentsModel');

//POST /assignments/add
route.post("/add", async(req, res) => {
    try {
        const {title, description, totalMarks, deadline} = req.body;
        if(!title || !description || !totalMarks || !deadline) {
            return res.json({success: false, message: "Please fill in the required fields"});
        }

        const newAssignment = await assignmentsModel.create({title, description, totalMarks, deadline});
        res.status(200).json({success: true, message: "Announcemnt added successfully", newAssignment});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Error creating assignment"});
    }
})

//GET announcement/get
route.get('/get', async(req, res) => {
    try {
        const assignments = await assignmentsModel.find();
        if(!assignments) {
            return res.json({message: "Assignemnt list empty"});
        }
        res.status(200).json({success: true, message: "assignments fetched successfully", assignments});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error getting assignments"})
    }
})

module.exports = route;