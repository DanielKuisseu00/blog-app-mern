const router = require("express").Router();
const Blog = require("../model/Blog");
const verify = require("./verify");
const multer = require("multer");
const uploadFile = require("../util/s3");
const { validateBlog } = require("../util/validation");
const User = require("../model/User");

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


const upload = multer({ dest: "./images" });

router.post("/blog", verify, upload.single("image"), async (req, res) => {
  // validating content sent to server

  const { error } = validateBlog(req.body);

  if (error)
    return res
      .status(500)
      .json("Your blog doesn't seemed to be filled out correctly");

  // Blog components
  const imageLink = await (await uploadFile(req.file)).Location;
  const title = req.body.title;
  const subtitle = req.body.subtitle;
  const content = req.body.content;
  const user = await User.findOne({ _id: req.user._id });

  // creaticng blog object to save to mongodb

  const blogPost = new Blog({
    title,
    subtitle,
    content,
    image: imageLink,
    author: user.username,
  });

  try {
    blogPost.save();
    return res.status(200).json(imageLink);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.delete("/blog/:blogID", verify, (req, res) => {});

module.exports = router;
