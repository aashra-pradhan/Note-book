import Post from "../model/postModel.js";

export const getPost = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
};

async function getIndividualPost(postId) {
  try {
    // Find the post by ID in the database
    const post = await Post.findById(postId);
    return post;
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    throw error;
  }
}

export const getPostById = async (req, res) => {
  try {
    const postId = req.params.id;
    console.log(postId, "hhh");
    // Call your function to fetch post by ID
    const post = await getIndividualPost(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createPost = async (req, res) => {
  const { title, content } = req.body;
  const post = new Post({
    title,
    content,
  });
  try {
    const savedPost = await post.save();
    res.status(201).send(savedPost);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
};

export const updatePost = async (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
    res.json(updatedPost);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
};

export const deletePost = async (req, res) => {
  const id = req.params.id;
  try {
    await Post.findByIdAndDelete(id);
    res.send("Post deleted successfully");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
};
