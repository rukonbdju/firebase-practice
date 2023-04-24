import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authProvider/AuthProvider";

const CreatePost = () => {
  const { user } = useContext(AuthContext);
  const [blogData, setBlogData] = useState({});

  const postData = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/blogs", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
    } catch {
      (err) => console.error(err);
    }
  };

  const getBlogData = (e) => {
    e.preventDefault();
    let timestamp = new Date().toDateString();
    let name = user?.displayName;
    let email = user?.email;
    let title = e.target.title.value;
    let blog = e.target.blog.value;
    let data = { timestamp, name, email, title, blog };
    setBlogData(data);
    postData(data);
    console.log(blogData)
    e.target.reset();
  };

  return (
    <div className="my-10">
      <form onSubmit={getBlogData} className="max-w-screen-sm mx-auto px-10">
        <div className="form-control mt-5">
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-5">
          <textarea
            type="text"
            name="blog"
            placeholder="Write your blog"
            className="textarea textarea-bordered textarea-lg w-full"
          ></textarea>
        </div>
        <div className="form-control mt-5">
          <button className="btn btn-primary">Post</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
