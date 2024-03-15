import React from 'react'

function Navbar() {
  return (
    <div className='navBar-main'>
      <nav className='navBar'>
        <h1 className='logo'>Logo</h1>
        <div className='list-items'>
        <li><a href="/">Home</a></li>
        <li><a href="/">Materials</a></li>
        <li><a href="/">About Us</a></li>
        </div>
        <div>
          <input type="text" placeholder='Serch... Materials
' />
        </div>
        <div className='btns-box'>
          <button className='cart'>Cart</button>
          <button className='login'>Login</button>
        <button className='singup'>Sing Up</button></div>
      </nav>
    </div>
  )
}

export default Navbar