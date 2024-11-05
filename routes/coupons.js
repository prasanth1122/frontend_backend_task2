// routes/coupons.js
// routes/coupons.js
import { Router } from "express";
import Coupon from "../models/Coupon.js";

// Capitalized to match the filename exactly

const router = Router();

// Get all coupons
router.get("/", async (req, res) => {
  try {
    const coupons = await Coupon.find(); // Use capitalized "Coupon" model here
    res.status(200).json(coupons);
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve coupons",
      error: error.message,
    });
  }
});

export default router;
