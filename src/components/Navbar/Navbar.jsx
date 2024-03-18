import React from 'react'
import { FaCartArrowDown } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";


function Navbar() {
  return (
    <div className='navBar-main'>
      <nav className='navBar'>
        <h1 className='logo'>Meterial</h1>
        <div className='list-items'>
        <li><a href="/">Home</a></li>
        <li><a href="/">Materials</a></li>
        <li><a href="/">About Us</a></li>
        </div>
        <div className='serch'>
          <input className='serchBox' type="text" placeholder='Serch... Materials
'  />
        </div>
        <div className='btns-box'>
          <button className='cart'><FaCartArrowDown /></button>
          <button className='login'>Login  <CiLogin /></button>
        {/* <button className='singup'>Sing Up</button> */}
        </div>
      </nav>
    </div>
  )
}

export default Navbar