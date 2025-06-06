import express from "express";

const router = express.Router();

router.get("/purchasing", (req, res) => {
  res.send("purchase route");
});

export default router;
