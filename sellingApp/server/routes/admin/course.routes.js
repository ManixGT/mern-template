import express from "express";

const adminCourse = express.Router();

adminCourse.get("/course", (req, res) => {
  res.send("Admin get course");
});

adminCourse.post("/create-course", (req, res) => {
  res.send("Create the course");
});

adminCourse.delete("/course", (req, res) => {
  res.send("Delete the course");
});
