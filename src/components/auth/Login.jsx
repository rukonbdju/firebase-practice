import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useFirebase from "../../hooks/useFirbase";

const Login = () => {
  const navigate=useNavigate()
  const {signInByEmailAndPassword,googleSignUp}=useFirebase()
    const handleLogin=(e)=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;
        signInByEmailAndPassword(email,password,navigate);
        e.target.reset();
    }
  return (
    <div className="py-12 bg-base-200">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold">Welcome Back !</h1>
      </div>
      <form onSubmit={handleLogin} className="max-w-screen-sm mx-auto px-10">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
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
            placeholder="password"
            className="input input-bordered"
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className="divider max-w-screen-sm mx-auto px-10">OR</div>
      <div className="max-w-screen-sm px-10 mx-auto">
      <button onClick={()=>googleSignUp(navigate)} className="btn btn-primary w-full">Continue With Google</button>
      </div>
      <div className="max-w-screen-sm px-10 my-6 mx-auto">
        <p>New user? Please<Link className="text-blue-700 inline-block px-2 no-underline hover:underline " to="/register">Create a new account</Link></p>
      </div>
    </div>
  );
};

export default Login;
