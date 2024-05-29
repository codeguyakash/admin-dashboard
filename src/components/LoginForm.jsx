import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginpagebg from "../assets/loginpagebg.jpg";
import logo from "../assets/logo_RMSI.png";

const LoginForm = () => {
  const [email, setEmail] = useState("admin@rmsi.com");
  const [password, setPassword] = useState("Admin@123");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    navigate("/dashboard");
  };

  return (
    <div
      className="h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${loginpagebg})` }}
    >
      <div className="backdrop-blur-md p-8 rounded-sm shadow-lg grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center items-center md:h-full gap-2">
          <img src={logo} alt="logo" className="rounded my-1" />
          <h1 className="text-5xl font-bold text-white">RMSI Admin</h1>
          <p className="text-xl">Please sign in to continue</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
        >
          <h1 className="text-3xl mb-4">Sign in</h1>
          <input
            type="email"
            placeholder="Email Address"
            className="bg-white p-2 mb-4 w-full rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-white p-2 mb-4 w-full rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-green-900 text-white px-4 py-2 rounded-md shadow-md hover:bg-primary-dark transition duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
