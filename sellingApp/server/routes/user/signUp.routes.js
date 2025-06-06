import express from "express";

const router = express.Router();

router.get("/purchase", (req, res) => {
  res.send("purchase route");
});

export default router;
