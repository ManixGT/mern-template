import express from "express";
import "dotenv/config";
import user from "./routes/user/user.routes.js";
import courses from "./routes/user/course.routes.js";

const app = express();
const PORT = process.env.PORT || 3001;

// app.use("/api/v1");

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
