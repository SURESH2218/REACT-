import React from "react";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-cyan-100 h-[100vh] flex items-center justify-center ">
      <div className="bg-white p-8 rounded-xl flex flex-col gap-6 items-center">
        <span className="font-bold  ">CHAT APP</span>
        <span>REGISTER HERE</span>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="p-4 border-collapse border-b-2 border-cyan-900"
            type="text"
            placeholder="display name"
          />
          <input
            className="p-4 border-collapse border-b-2 border-cyan-900"
            type="email"
            placeholder="email"
          />
          <input
            className="p-4 border-collapse border-b-2 border-cyan-900"
            type="password"
            placeholder="password"
          />
          <input className="p-4  border-cyan-900" type="file" />
          <button className="p-2 bg-slate-700 text-white rounded-xl">
            Sign Up
          </button>
        </form>
        <p className="">You do have an account ? Login</p>
      </div>
    </div>
  );
};

export default Register;
