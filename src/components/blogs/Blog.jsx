import React, { useContext } from "react";
import { AuthContext } from "../../context/authProvider/AuthProvider";

const Blog = ({ blog }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="border-2 rounded-md p-5 bg-slate-300">
      <div className="flex flex-row items-center gap-6">
        <div>
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
              <span>{user?.displayName.slice(0, 1)}</span>
            </div>
          </div>
        </div>
        <div>
          <p className="text-md">{user?.displayName}</p>
          <p className="text-sm">{blog.timestamp}</p>
          <p className="text-sm text-cyan-600">{blog.email}</p>
        </div>
      </div>
      <h1 className="text-2xl my-5">{blog.title}</h1>
      <h1 className="text-md">{blog.blog}</h1>
    </div>
  );
};

export default Blog;
