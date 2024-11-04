const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const announcementSchema = new Schema({
    announcement: {
        type: String,
        required: true,
    }
}, {timestamps: true})

const announcementModel = mongoose.model("Announcement", announcementSchema);
module.exports = announcementModel;