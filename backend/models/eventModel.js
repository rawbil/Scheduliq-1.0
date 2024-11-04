const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    event: {
        type: String,
        required: true
    }
});

const eventModel = mongoose.model('Event', eventSchema);
module.exports = eventModel;