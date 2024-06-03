const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;

// set up static folder
// app.use(express.static(path.join(__dirname, "public")));
let  posts = [
    {id: 1, title: "post one"},
    {id: 2, title: "post two"},
    {id: 3, title: "post three"}
];


app.get("/api/posts", (req, res) => {
    const limit = Number(req.query.limit);
    if(!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    } 
    res.status(200).json(posts);
});

// get one postr by id
app.get("/api/post/:id", (req, res, next) => {
    const id = Number(req.params.id);
    const post = posts.find((post) => post.id === id);
    if(!post) {
        return res.status(404).json( { msg: ` A post with the id of ${id} was not found`});
    } 
    res.status(200).json(post);
});


app.listen(port, () => console.log(`Server running on port: ${port}`));