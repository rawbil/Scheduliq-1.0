const express = require('express');
const route = express.Router();
const announcementModel = require('../models/announcementModel');

//POST /announcements/add
route.post("/add", async(req, res) => {
    try {
        const {announcement} = req.body;
        if(!announcement) {
            return res.json({success: false, message: "Please fill in the required fields"});
        }

        const newAnnoucement = await announcementModel.create({announcement});
        res.status(200).json({success: true, message: "Announcemnt added successfully", newAnnoucement});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Error creating events"});
    }
})

//GET announcement/get
route.get('/get', async(req, res) => {
    try {
        const announcements = await announcementModel.find();
        if(!announcements) {
            return res.json({message: "Announcement list empty"});
        }
        res.status(200).json({success: true, message: "Announcements fetched successfully", announcements});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error getting announcement"})
    }
})

module.exports = route;