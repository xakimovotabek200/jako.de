import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <ul className="collection_logo">
          <li className="item_logo">
            <a href="" className='active'>Teamsport</a>
          </li>
          <li className="item_logo">Corporate Teamwear</li>
        </ul>
      </div>
      <ul className="collection">
        <li className="item">Help</li>
        <li className="item">Become a member of the club</li>
        <div className='line_navbar'></div>
        <li className="item">Log in</li>
      </ul>
    </div>
  )
}

export default Navbar