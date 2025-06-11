import express from "express";
import "dotenv/config";
import user from "./routes/user/user.routes.js";
import courses from "./routes/user/course.routes.js";
import adminCourse from "./routes/admin/course.routes.js";
import admin from "./routes/admin/admin.routes.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

//!Routing
app.use("/api/v1/user", user);
app.use("/api/v1/courses", courses);
app.use("/api/v1/admin", admin);
app.use("/api/v1/courses", adminCourse);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
