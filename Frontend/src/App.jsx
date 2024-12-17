import React from 'react'
import Left from './home/left/Left'
import Right from './home/right/right'
import Logout from './home/logout/Logout';


function App() {
  return (
    <>
      <div className = " flex h-screen ">
        <Logout className=""/>
        <Left/>
        <Right />
    </div>
    </>
    
  )
}

export default App;
