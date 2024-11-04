const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assignmentsSchema = new Schema({
    title: {
        type:String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    totalMarks: {
        type: Number,
        required: true,
    },
    deadline: {
        type: Date,
        default: Date.now
    }
}, {timestamps: true});

const assignmentsModel = mongoose.model('Assignment', assignmentsSchema);
module.exports = assignmentsModel;