import express from "express";

const router = express.Router();

router.get("/purchased", (req, res) => {
  res.send("purchased route");
});

export default router;
