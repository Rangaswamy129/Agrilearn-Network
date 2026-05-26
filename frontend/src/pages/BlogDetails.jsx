import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import blogsData from "../data/blogsData";
import "../styles/blogdetails.css";

const BlogDetails = () => {

const { id } = useParams();
const navigate = useNavigate();

const blog = blogsData.find(b => b.id === parseInt(id));

const [likes,setLikes] = useState(0);
const [comments,setComments] = useState([]);
const [commentText,setCommentText] = useState("");

if(!blog) return <h2>Blog not found</h2>;

const addComment = () => {

if(commentText.trim()==="") return;

setComments([...comments,commentText]);
setCommentText("");

};

const relatedBlogs = blogsData.filter(
b => b.category === blog.category && b.id !== blog.id
);

return (

<div className="blog-details">

<h1>{blog.title}</h1>

<div className="blog-meta">

<span>✍ {blog.author}</span>

<span>📅 {blog.date}</span>

<span>⏱ {blog.readingTime}</span>

</div>

<img src={blog.image} alt={blog.title} className="main-image"/>
<div className="video-container">

<iframe
width="100%"
height="400"
src={blog.video}
title={blog.title}
frameBorder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowFullScreen
></iframe>

</div>

<div className="blog-content">
{blog.content.map((item, index) => {

  if (item.type === "text") {
    return (
      <p key={index}>
        {item.value}
      </p>
    );
  }

  if (item.type === "image") {
    return (
      <img
        key={index}
        src={item.value}
        alt="blog"
      />
    );
  }

  return null;

})}

</div>

{/* Like Button */}

<div className="like-share">

<button onClick={()=>setLikes(likes+1)}>
👍 Like {likes}
</button>

<button
onClick={() =>
navigator.share
? navigator.share({title:blog.title,url:window.location.href})
: alert("Share not supported")
}
>

🔗 Share

</button>

</div>

{/* Comments Section */}

<div className="comments-section">

<h3>Comments</h3>

<input
type="text"
placeholder="Write a comment..."
value={commentText}
onChange={(e)=>setCommentText(e.target.value)}
/>

<button onClick={addComment}>Post</button>

<ul>

{comments.map((c,index)=>(
<li key={index}>{c}</li>
))}

</ul>

</div>

{/* Related Blogs */}

<div className="related-blogs">

<h3>Related Blogs</h3>

<div className="related-grid">

{relatedBlogs.map((b) => (

<div
key={b.id}
className="related-card"
onClick={() => navigate(`/blog/${b.id}`)}
>

<img src={b.image} alt={b.title} />

<p>{b.title}</p>

</div>

))}

</div>

</div>

<div className="back-button-container">

<button
className="back-btn"
onClick={()=>navigate("/blogs")}
>

← Back to Blogs

</button>

</div>

</div>

);

};

export default BlogDetails;