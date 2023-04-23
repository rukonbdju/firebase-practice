import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFirebase from "../../hooks/useFirbase";
import { AuthContext } from "../../context/authProvider/AuthProvider";

const Register = () => {
  const navigate=useNavigate()
  const authInfo=useContext(AuthContext);
  const{createUserByEmailAndPassword}=authInfo
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserByEmailAndPassword(name, email, password,navigate);
    e.target.reset();
  };
  return (
    <div className="py-12 bg-base-200">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold">Register now!</h1>
      </div>
      <form onSubmit={handleRegister} className="max-w-screen-sm mx-auto px-10">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <div className="max-w-screen-sm px-10 my-6 mx-auto">
        <p>
          Already have an account? Please
          <Link
            className="text-blue-700 inline-block px-2 no-underline hover:underline "
            to="/"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
