const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const librarySchema = new Schema({
    bookTitle: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    }
}, {timestamps: true});

const libraryModel = mongoose.model('Library', librarySchema)
module.exports = libraryModel;