const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true,
    },
    status: {
        type: String,
        enum: ["Present", "Absent", "Absent With Apology"],
        required: true,
    }
})

const attendanceModel = mongoose.model("Attendance", attendanceSchema);
module.exports = attendanceModel;