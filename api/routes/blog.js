const router = require("express").Router();
const Blog = require("../model/Blog");

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    return res.status(200).json(blogs);
  } catch (err) {
    console.log(err);
  }
  res.json("working");
});

router.get("/:blogId", async (req, res) => {
    const blogId = req.params.blogId;
    

  try {
    const foundBlog = await Blog.findById(blogId);

    if (!foundBlog) return res.status(500).json("no blog found");

    return res.status(200).json(foundBlog);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
