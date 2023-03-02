import React from 'react'
import Logo from '../../Image/logo.png'
const Navbar = () => {
  return (
    <div className='w-full h-20  font-Montserrat flex justify-between text-white'>
        <div className='w-44 h-full  flex justify-end items-center'>
            <img src={Logo} className="w-10 h-10" />
        </div>
        <div className='w-[35%] mr-14 flex justify-around h-full '>
            <ul className='flex  justify-evenly w-full h-full items-center'>
                <li>Home</li>
                <li>Feature</li>
                <li>Product</li>
                <li>Contact</li>
                <button className='bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] px-3 py-1.5 rounded-lg'>BILD NOW</button>
            </ul>
        </div>
    </div>
  )
}

export default Navbar