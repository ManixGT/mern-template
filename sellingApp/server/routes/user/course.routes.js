import express from "express";

const coursesRouter = express.Router();

coursesRouter.get("/course", (req, res) => {
  res.send("get all courses route");
});

coursesRouter.post("/course", (req, res) => {
  res.send("purchasing new course");
});

export default coursesRouter;
