import express from "express";

const adminCourse = express.Router();

adminCourse
  .get("/course", (req, res) => {
    res.send("Admin get course");
  })
  .post("/course", (req, res) => {
    res.send("Create the course");
  })
  .patch("/course", (req, res) => {
    res.send("Edit the course");
  })
  .delete("/course", (req, res) => {
    res.send("Delete the course");
  });

export default adminCourse;
