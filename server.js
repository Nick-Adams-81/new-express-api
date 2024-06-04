import express from "express";
import path from "path";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";

const app = express();
const port = process.env.PORT || 8000;

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded( { extended: false }));

//Logger middleware
app.use(logger);

// set up static folder
// app.use(express.static(path.join(__dirname, "public")));


// routes
app.use("/api/posts", posts);

// Error handler
app.use(errorHandler);


app.listen(port, () => console.log(`Server running on port: ${port}`));