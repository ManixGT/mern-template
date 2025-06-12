import express from "express";

const courseRouter = express.Router();

courseRouter
  .get("/", (req, res) => {
    res.send("get all courses route");
  })
  .get("/:id", (req, res) => {
    res.send("get single course by id");
  })
  .post((req, res) => {
    res.send("purchasing new course");
  });

export default courseRouter;
