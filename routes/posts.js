import express from "express";
const router = express.Router();
import { getPosts, getPost, cereatePost, deletePost, updatePost } from "../controllers/postController.js";




router.get("/", getPosts);

// get one post by id
router.get("/:id", getPost);

// Create new post
router.post("/", cereatePost);

// Update post 
router.put("/:id", updatePost);

// Delete post
router.delete("/:id", deletePost);

export default router;

