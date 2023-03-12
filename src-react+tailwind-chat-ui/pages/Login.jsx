import React from "react";

const Login = () => {
  return (
    <div className="bg-cyan-100 h-[100vh] flex items-center justify-center ">
      <div className="bg-white p-8 rounded-xl flex flex-col gap-6 items-center">
        <span className="font-bold  ">CHAT APP</span>
        <span>LOGIN</span>
        <form className="flex flex-col gap-4">
          <input
            className="p-4 border-collapse border-b-2 border-cyan-900"
            type="email"
            placeholder="email"
          />
          <input
            className="p-4 border-none border-b-2 border-cyan-900"
            type="password"
            placeholder="password"
          />
          <button className="p-2 bg-slate-700 text-white rounded-xl ">
            Sign In
          </button>
        </form>
        <p className="">You don't have an account ? Register</p>
      </div>
    </div>
  );
};

export default Login;
