import React from 'react'
import Banner from '../Banner/Banner'
import Landing from '../Landing/Landing'
import Navbar from '../Navbar/Navbar'
import Aboute from '../Aboute/Aboute'
import Product from '../Product/Product'
import Service from '../Services/Serives'
import FooterTop from '../Footer-top/FooterTop'
import Footer from '../Footer/Footer'
const Home = () => {
    return (
        <div className='bg-[#0A0F29] overflow-hidden'>
            <Navbar />
            <Landing />
            <Banner/>
            <Aboute />
            <Product/>
            <Service/>
            <FooterTop/>
            <Footer/>
        </div>
    )
}

export default Home