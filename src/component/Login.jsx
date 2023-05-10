import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import { BiLogInCircle } from "react-icons/bi";

const Login = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    setSuccess("");
    setError("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        toast("Login Sccessfully done");
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError("Wrong Password/Email");
      });
  };
  const handleWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast("Login Sccessfully done");
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError("Please Input correct Info");
      });
  };
  return (
    <div className="log-container bg-base-200">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-8">Please Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <small className="text-red-500">{error}</small>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">
                  <BiLogInCircle className="text-xl me-2" /> Login
                </button>
                <ToastContainer />
              </div>
            </form>
            <label className="label">
              <Link
                to="/register"
                className="label-text-alt link link-hover p-3 ms-4"
              >
                New here! Please Register First.
              </Link>
            </label>
            <div className="ms-8 mb-5">
              <button onClick={handleWithGoogle} className="btn btn-primary">
                <FcGoogle className="text-2xl me-2" />
                Sign in With Google
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
