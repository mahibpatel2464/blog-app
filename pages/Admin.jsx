import { useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext";

export default function Admin() {
  const { blogs, addBlog, deleteBlog } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAdd = () => {
    addBlog({ id: Date.now(), title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h2>Admin Panel</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <br />

      <textarea
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <br />

      <button onClick={handleAdd}>Add Blog</button>

      <h3>Delete Blogs</h3>
      {blogs.map(blog => (
        <div key={blog.id}>
          {blog.title}
          <button onClick={() => deleteBlog(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
