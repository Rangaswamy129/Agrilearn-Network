import { useState } from "react";
import BlogCard from "../components/BlogCard";
import blogsData from "../data/blogsData";
import "../styles/blogs.css";

const Blogs = () => {

  const [search, setSearch] = useState("");

  const filteredBlogs = blogsData.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="blogs-container">

      <h1 className="blogs-heading">
        Agro Blogs
      </h1>

      <div className="search-bar">

        <input
          type="text"
          placeholder="What are you looking for"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button>
          🔍
        </button>

      </div>

      <div className="blogs-grid">

        {filteredBlogs.map((blog) => (

          <BlogCard
            key={blog.id}
            blog={blog}
          />

        ))}

      </div>

    </div>

  );

};

export default Blogs;