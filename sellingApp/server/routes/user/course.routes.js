import express from "express";

const coursesRouter = express.Router();

coursesRouter.get("/courses", (req, res) => {
  res.send("get all courses route");
});

coursesRouter.post("/course-purchase", (req, res) => {
  res.send("purchased course");
});

export default coursesRouter;
