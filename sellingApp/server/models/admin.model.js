import mongoose from "mongoose";
import adminSchema from "../schema/admin.schema";

export default mongoose.model("Admin", adminSchema);
