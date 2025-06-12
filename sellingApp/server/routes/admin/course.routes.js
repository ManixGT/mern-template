import express from "express";
import adminAuthMiddleware from "../../middleware/adminAuth.middleware.js";

const adminCourse = express.Router();

adminCourse.use(adminAuthMiddleware);

adminCourse
  .get("/course/:id", (req, res) => {
    res.send("Admin get course");
  })
  .post("/course", (req, res) => {
    res.send("Create the course");
  })
  .patch("/course/:id", (req, res) => {
    res.send("Edit the course");
  })
  .delete("/course/:id", (req, res) => {
    res.send("Delete the course");
  });

export default adminCourse;
