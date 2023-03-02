import React from 'react'
import Bundle from '../Bundle/Bundle'
import Card from '../Card/Card'
import CreateNft from '../CreateNFT/CreateNft'
import Footer from '../Footer/Footer'
import Landing from '../Landing/Landing'
import Most from '../Most/Most'
import Navbar from '../Nav/Navbar'
import Product from '../Product/Product'

const Home = () => {
  return (
    <div className='overflow-hidden bg-[#0A0F29]'>
        <Navbar/>
        <Landing/>
        <Card/>
        <Bundle/>
        <Product/>
        <Most/>
        <CreateNft/>
        <Footer/>
    </div>
  )
}

export default Home