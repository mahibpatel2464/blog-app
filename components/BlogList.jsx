import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

export default function BlogList() {
  const { blogs } = useContext(BlogContext);

  return (
    <div>
      <h2>All Blogs</h2>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}
