import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center items-center flex-col h-4/5">
      <div className="bg-white rounded-[46px] w-4/5 px-8 py-4">
        <h2 className="font-bold text-center text-2xl">Sign Up</h2>
        <form className="flex flex-col">
          <label className="mt-4 font-semibold" htmlFor="email">
            E-mail
          </label>
          <input
            className="bg-[#CAF0F8] py-1 px-4 rounded-full border-[#0009E4] border outline-0 focus:border-2"
            id="email"
            type="email"
          />
          <label className="mt-4 font-semibold" htmlFor="password">
            Password
          </label>
          <input
            className="bg-[#CAF0F8] py-1 px-4 rounded-full border-[#0009E4] border outline-0 focus:border-2"
            id="password"
            type="password"
          />
          <label className="mt-4 font-semibold" htmlFor="password">
            Repeat Password
          </label>
          <input
            className="bg-[#CAF0F8] py-1 px-4 rounded-full border-[#0009E4] border outline-0 focus:border-2"
            id="password"
            type="password"
          />
          <button className="bg-[#03045E] text-white px-6 py-2 rounded-full font-bold text-xl cursor-pointer my-4 self-center mt-12">
            Sign Up
          </button>
        </form>
      </div>
      <p className="mt-2">
        Already have an account ?
        <Link
          className="text-[#86E9FF] underline underline-offset-4 ml-2"
          to="/login"
        >
          Sign In!
        </Link>
      </p>
    </div>
  );
};

export default Register;
