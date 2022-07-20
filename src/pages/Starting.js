import React from "react";
import { Link } from "react-router-dom";

const Starting = () => {
  return (
    <div className="flex justify-center items-center flex-col h-4/5">
      <h1 className="text-white font-bold text-6xl">To Do App</h1>
      <div className="mt-5 flex justify-between w-2/3 ">
        <Link to="/login" className="bg-[#03045E] text-white px-6 py-2 rounded-full font-bold text-xl cursor-pointer">Sign In</Link>
        <Link to="/register" className="bg-[#90E0EF] text-white px-6 py-2 rounded-full font-bold text-xl cursor-pointer">Sign Up</Link>
      </div>
    </div>
  );
};

export default Starting;
