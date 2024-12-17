import React from 'react'
import Chatuser from './Chatuser'
import Messages from './Message'
import Type from './Type'

function Right() {
  return (
    <div className = "w-[70%]  bg-slate-950 flex flex-col text-white h-screen">
      <Chatuser />
      <div className='flex-grow overflow-auto'>

      <Messages />
      <Messages />
      <Messages />
      <Messages />
      <Messages />
      <Messages />
      <Messages />
      <Messages />
      <Messages />
      <Messages />
      <Messages />
      <Messages />
      
      </div>
      <Type />
    </div>
  )
}

export default Right
