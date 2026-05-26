import { useNavigate } from "react-router-dom";
import "../styles/blogs.css";

const BlogCard = ({ blog }) => {

  const navigate = useNavigate();

  return (
    <div
      className="blog-card"
      onClick={() => navigate(`/blog/${blog.id}`)}
    >

      <img src={blog.image} alt={blog.title} />

      <div className="blog-content">

        <span className="blog-category">{blog.category}</span>

        <h3 className="blog-title">{blog.title}</h3>

        <p className="blog-description">{blog.description}</p>

      </div>

    </div>
  );
};

export default BlogCard;