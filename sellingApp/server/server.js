import express from "express";
import "dotenv/config";
import courses from "./routes/user/courses.routes.js";
import userLogin from "./routes/user/login.routes.js";
import userPurchasing from "./routes/user/purchasing.routes.js";
import userSignUp from "./routes/user/signUp.routes.js";
import userPurchased from "./routes/user/userPurchased.routes.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
