import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Blogs</Link> | 
      <Link to="/admin">Admin</Link>
    </nav>
  );
}
