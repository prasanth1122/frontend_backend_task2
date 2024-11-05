// models/Coupons.js
import mongoose from "mongoose";

const couponSchema = new mongoose.Schema(
  {
    title: String,
    discount: Number,
  },
  { collection: "coupons" }
);

export default mongoose.model("Coupon", couponSchema);
