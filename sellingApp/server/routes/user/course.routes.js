import express from "express";

const coursesRouter = express.Router();

coursesRouter.get("/", (req, res) => {
  res.send("get all courses route");
});

coursesRouter.post("/", (req, res) => {
  res.send("purchasing new course");
});

export default coursesRouter;
