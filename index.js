import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import articlesRoute from "./routes/articles.js"; // Ensure the correct path and extension
import couponsRoute from "./routes/coupons.js";
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());

app.use(express.json());

// MongoDB Connection (replace with your MongoDB URI)
mongoose
  .connect(
    "mongodb+srv://sadulaprasanthreddy:JG18fknWLSuDskDt@cluster0.cmc9m.mongodb.net/coherence_beta?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Routes
app.use("/api/articles", articlesRoute);
app.use("/api/coupons", couponsRoute);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
