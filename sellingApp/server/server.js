import express from "express";
import "dotenv/config";
import cors from "cors";
import user from "./routes/user/user.routes.js";
import courses from "./routes/user/course.routes.js";
import adminCourse from "./routes/admin/course.routes.js";
import admin from "./routes/admin/admin.routes.js";
import connectDB from "./dbConnection.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded());

//!Routing
app.use("/api/v1/user", user);
app.use("/api/v1/courses", courses);
app.use("/api/v1/admin", admin);
app.use("/api/v1/admin/courses", adminCourse);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
