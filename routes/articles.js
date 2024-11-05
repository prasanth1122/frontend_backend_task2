// routes/articles.js
import { Router } from "express";
import Article from "../models/Article.js"; // Adjust path as needed

const router = Router();

// Get all articles
router.get("/", async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    console.error("Error fetching articles:", error); // Log detailed error
    res
      .status(500)
      .json({ message: "Failed to retrieve articles", error: error.message });
  }
});

// Get a single article by ID
router.get("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (article) {
      res.json(article);
    } else {
      res.status(404).json({ message: "Article not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching article", error });
  }
});

export default router;
