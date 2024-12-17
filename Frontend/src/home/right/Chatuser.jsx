import React from "react";

function Chatuser() {
  return (
    <>
    <div className=" pl-5 pt-5 pb-3 h-[10vh] flex items-center space-x-4 bg-gray-900 hover:bg-blue-400 ">
      <div className="avatar online pb-1 pt-1">
        <div className="w-12 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>

      <div>
         <h1 className = "text-lg">Mamta</h1>
         <span className = "text-sm">Online</span>
      </div>
    </div>
    </>
  );
}

export default Chatuser;
