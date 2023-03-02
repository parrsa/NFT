import React from 'react'
import Logo from '../../Image/logo.png'
const Navbar = () => {
  return (
    // shadow-[-1300px_200px_200px_100px] shadow-[#c0b9b9] 
    <div className='w-full h-20  shadow-3xl   flex text-white font-Montserrat justify-between'>
        <div className='w-44  h-full flex justify-end  items-center'>
            <img src={Logo} className="w-10 mr-6 h-10"/>
        </div>
        <div className='w-[35%]  mr-14 h-full flex justify-around'>
            <ul className='flex justify-evenly w-full h-full items-center'>
                <li>Home</li>
                <li>Feature</li>
                <li>Product</li>
                <li>Contact</li>
            <button className='bg-gradient-to-r from-[#BB47A6]  to-[#4E6DD8] px-3 py-1.5 rounded-lg '>BILD NOW</button>
            </ul>
        </div>
    </div>
  )
}

export default Navbar