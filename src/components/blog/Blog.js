import React from "react";

const Blog = (props) => {
  const data = props.blog.data;
  console.log(data);
  return (
    <section className="blog" id="blog">
      <div className="container">
        <h1 className="blog-heading">
          My<span> Blogs</span>
        </h1>
        <div className="card-wrapper blog-wrapper" id="blog-wrapper">
          {data.map((blog, index) => (
            <div className="card" key={index}>
              <img src={blog.image} alt="" />
              <h1>{blog.title}</h1>
              <p>{blog.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
