import express from "express";
import path from "path";
import posts from "./routes/posts.js";

const app = express();
const port = process.env.PORT || 8000;

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded( { extended: false }));

// set up static folder
// app.use(express.static(path.join(__dirname, "public")));


// routes
app.use("/api/posts", posts);


app.listen(port, () => console.log(`Server running on port: ${port}`));