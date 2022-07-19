import React from "react";

const Starting = () => {
  return (
    <div className="flex justify-center items-center flex-col h-4/5">
      <h1 className="text-white font-bold text-6xl">To Do App</h1>
      <div className="mt-5">
        <button className="bg-[#03045E] text-white px-8 py-2 rounded-full font-bold text-xl mr-7 cursor-pointer">Sign In</button>
        <button className="bg-[#90E0EF] text-white px-8 py-2 rounded-full font-bold text-xl cursor-pointer">Sign Up</button>
      </div>
    </div>
  );
};

export default Starting;
