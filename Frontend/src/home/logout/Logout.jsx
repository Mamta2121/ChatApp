import React from 'react'
import { CiLogout } from "react-icons/ci";

function Logout() {
  return (
    <>

    <div className=" bg-slate-950 text-white flex flex-col justify-end">
      <div className='p-3 align-bottom '>
        <button>

        <CiLogout className="text-5xl p-2 hover:bg-gray-600 rounded-lg  duration-300 " />
        </button>
      </div>
      
    </div>
    
    </>
  )
}

export default Logout
