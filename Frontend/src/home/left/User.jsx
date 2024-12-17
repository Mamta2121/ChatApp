import React from 'react'

function User() {
  return (
    <div className = "flex space-x-4 px-8 py-7 hover:bg-slate-400">
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div> 

      <div>
        <h1 className='font-bold'>Mamta Rajera</h1>
        <span>mamta@gmail.com</span>
      </div>
    </div>
  );
}

export default User
