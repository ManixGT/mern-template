import mongoose from "mongoose";
import purchaseSchema from "../schema/purchase.schema";

export default mongoose.model("Purchase", purchaseSchema);
