const express = require("express");
const app = express();
const PORT = 3001;
app.use(express.json());
let blogs = []; 
app.post("/blog", (req, res) => {
  const { title, content } = req.body;
  blogs.push({ title, content });
  res.json({ message: "Blog added!", blogs });
});
app.get("/blog", (req, res) => {
  res.json(blogs);
});
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
