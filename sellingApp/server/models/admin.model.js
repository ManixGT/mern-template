import mongoose from "mongoose";
import adminSchema from "../schema/admin.schema.js";

export default mongoose.model("Admin", adminSchema);
