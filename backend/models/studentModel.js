const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    regNo: {
        type: String,
        required: true,
        unique: true,
    },
/*     email: {
        type: String,
        required: true,
        unique: true,
    }, */
    grade: {
        type: String,
        required: true
    },
  /*   school: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true,
    } */
},{timestamps: true});

const studentModel = mongoose.model('Student', studentSchema);
module.exports = studentModel;