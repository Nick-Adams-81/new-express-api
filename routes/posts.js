import express from "express";
const router = express.Router();

let  posts = [
    {id: 1, title: "post one"},
    {id: 2, title: "post two"},
    {id: 3, title: "post three"},
    {id: 4, title: "post four"}
];



router.get("/", (req, res) => {
    const limit = Number(req.query.limit);
    if(!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    } 
    res.status(200).json(posts);
});

// get one postr by id
router.get("/:id", (req, res, next) => {
    const id = Number(req.params.id);
    const post = posts.find((post) => post.id === id);
    if(!post) {
        const error = new Error(` A post with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    } 
    res.status(200).json(post);
});

// Create new post
router.post("/", (req, res) => {
    const newPost = {
        id: posts.length +1,
        title: req.body.title
    };
    if(!newPost.title) {
        return res.status(400).json( { msg: "Please include a title" });
    }
    posts.push(newPost);
    res.status(201).json(posts);
});

// Update post 
router.put("/:id", (req, res) => {
    const id = Number(req.params.id);
    const post = posts.find((post) => post.id === id);
    if(!post) {
        return res.status(404).json({ msg: `No post with the id ${id} found`});
    }
    post.title = req.body.title;
    res.status(200).json(post);
});

// Delete post
router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);
    const post = posts.find((post) => post.id === id);
    if(!post) {
        return res.status(404).json( { msg: `No post with the id of ${id} found`});
    }
    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
});

export default router;

