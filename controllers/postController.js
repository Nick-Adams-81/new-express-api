let  posts = [
    {id: 1, title: "post one"},
    {id: 2, title: "post two"},
    {id: 3, title: "post three"},
    {id: 4, title: "post four"}
];

// @desc Get all posts
// @route GET /api/posts
export const getPosts = (req, res, next) => {
    const limit = Number(req.query.limit);
    if(!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    } 
    res.status(200).json(posts);
};

// @desc Get single post
// @route GET /api/posts/:id
export const getPost = (req, res, next) => {
    const id = Number(req.params.id);
    const post = posts.find((post) => post.id === id);
    if(!post) {
        const error = new Error(` A post with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    } 
    res.status(200).json(post);
};

// @desc Create new post
// @route POST /api/posts
export const cereatePost = (req, res, next) => {
    const newPost = {
        id: posts.length +1,
        title: req.body.title
    };
    if(!newPost.title) {
        const error = new Error(`Please include a title`);
        error.status = 400;
        return next(error);
    }
    posts.push(newPost);
    res.status(201).json(posts);
};

// @desc Update existing post
// @route PUT /api/posts/:id
export const updatePost = (req, res, next) => {
    const newPost = {
        id: posts.length +1,
        title: req.body.title
    };
    if(!newPost.title) {
        const error = new Error(`Please include a title`);
        error.status = 400;
        return next(error);
    }
    posts.push(newPost);
    res.status(201).json(posts);
};

// @desc Delete existing post
// @route DELETE /api/posts/:id
export const deletePost = (req, res, next) => {
    const id = Number(req.params.id);
    const post = posts.find((post) => post.id === id);
    if(!post) {
        const error = new Error(` A post with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    }
    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
};