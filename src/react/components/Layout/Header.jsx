import React from 'react'

const Header = () => {
  return (
    <>
      <ul className=' flex justify-center items-center gap-5 py-5'>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
          <li>
            <a href="/services">Services</a>
          </li>
        </li>
      </ul>
    </>
  );
}

export default Header