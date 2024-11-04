const express = require("express");
const route = express.Router();
const studentModel = require("../models/studentModel");

//students/add
route.post("/add", async (req, res) => {
  try {
    const { name, regNo, grade } = req.body;
    if (name.trim() === "" || regNo.trim() === "" || grade.trim() === "") {
      return res.json({
        success: false,
        message: "Please fill in all the fields",
      });
    }

    const newStudent = await studentModel.create({
      name,
      regNo,
      grade,
    });
    res
      .status(200)
      .json({
        success: true,
        message: "Student added successfully",
        newStudent,
      });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error adding students" });
  }
});

//GET/students
route.get("/get", async(req, res) => {
    try {
        const students = await studentModel.find();
        if(!students) {
            return res.json({success: false, message: "No students added"});
        }
        res.status(200).json({success: true, message: "Students fetched successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Error fetching students"})
    }
})

module.exports = route;
