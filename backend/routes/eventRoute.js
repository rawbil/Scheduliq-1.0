const express = require('express');
const route = express.Router();
const eventModel = require('../models/eventModel');

//POST /events/create
route.post("/create", async(req, res) => {
    try {
        const {event} = req.body;
        if(!event) {
            return res.json({success: false, message: "Please fill in the required fields"});
        }

        const newEvent = await eventModel.create({event});
        res.status(200).json({success: true, message: "Event added successfully", newEvent});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Error creating events"});
    }
})

//GET events/get
route.get('/get', async(req, res) => {
    try {
        const events = await eventModel.find();
        if(!events) {
            return res.json({message: "Event list empty"});
        }
        res.status(200).json({success: true, message: "Events fetched successfully", events});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error getting events"})
    }
})

module.exports = route;