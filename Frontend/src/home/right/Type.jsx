import React from "react";
import { IoSend } from "react-icons/io5";

function Type() {
  return (
    <>
      <div className="flex space-x-2 h-[8vh] items-center bg-slate-600 px-3">
        <div className="flex-grow">
            <input
            type="text"
            placeholder="Type here"
            className="border-[1px] border-gray-700 rounded-lg flex  px-4 py-2  w-full  rounded-xl grow outline-none bg-slate-900 "
            />
          </div>
        

        <button className="text-2xl pr-2">
          <IoSend/>
        </button>
      </div>
    </>
  );
}

export default Type;
