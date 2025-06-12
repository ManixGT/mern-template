import mongoose from "mongoose";
import courseSchema from "../schema/course.schema.js";

export default mongoose.model("Course", courseSchema);
