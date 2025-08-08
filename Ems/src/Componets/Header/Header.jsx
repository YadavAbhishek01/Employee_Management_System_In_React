import React from 'react'

const Header = () => {
  return (
    <div className='header flex items-end justify-between text-2xl'>
        <h1>Hii 👋<br/> Abhishek</h1>
       
        <div className='logoutbtn '>
        <button className='bg-red-500 text-white  text-xl rounded-xl py-2 px-5'>Logout</button>
        </div>
    </div>
  )
}

export default Header
