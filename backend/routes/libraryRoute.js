const express = require('express');
const route = express.Router();
const libraryModel = require('../models/libraryModel');

//POST /add
route.post('/add', async(req, res) => {
    try {
        const {bookTitle, author} = req.body;
        if(!bookTitle || !author) {
            return res.json({success: false, message: "Fill in all the fields"});
        }
        const newBook = await libraryModel.create({
            bookTitle,
            author,
        });
        res.status(200).json({success: true, message: "Book added successfully", newBook});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Error adding book"});
    }
})

//GET /get
route.get('/get', async(req, res) =>{
    try {
        const books = await libraryModel.find();
        if(!books) {
            return res.status(400).json({success: false, message: "Book list is empty"})
        }
        res.status(200).json({success: true, message: "Books fetched successfully", books});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error getting books"})
    }
})


module.exports = route;