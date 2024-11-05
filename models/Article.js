// models/Article.js
import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: String,
    month: String,
    views: Number,
    price: Number,
    introduction: String,
    pdf: String,
    subArticles: [
      {
        title: String,
        month: String,
        views: Number,
        price: Number,
        valueProposition: String,
        introduction: String,
        paragraphs: [String],
        pdf: String,
      },
    ],
  },
  { collection: "Articles" }
);

export default mongoose.model("Article", articleSchema);
