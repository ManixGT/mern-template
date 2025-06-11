import mongoose from "mongoose";
import courseSchema from "../schema/course.schema";

export default mongoose.model("Course", courseSchema);
