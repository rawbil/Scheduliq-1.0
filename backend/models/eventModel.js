const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({

});

const eventModel = mongoose.model('Event', eventSchema);
module.exports = eventModel;