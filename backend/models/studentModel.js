const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const studentSchema = new Schema({

});

const studentModel = mongoose.model('students', studentSchema);

module.exports = studentModel;