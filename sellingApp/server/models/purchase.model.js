import mongoose from "mongoose";
import purchaseSchema from "../schema/purchase.schema.js";

export default mongoose.model("Purchase", purchaseSchema);
