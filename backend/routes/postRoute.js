import express from "express";
import {
  getPost,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from "../controller/postController.js";

const router = express.Router();

// Get all posts
router.get("/", getPost);

//Get individual post
router.get("/:id", getPostById);

// Create a new post
router.post("/", createPost);

// Update a post
router.put("/:id", updatePost);

// Delete a post
router.delete("/:id", deletePost);

export default router;
