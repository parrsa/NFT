import React from 'react'
import CardImage from '../../Image/Card.png'
const Bundle = () => {
    return (
        <div className='w-full h-screen font-Montserrat overflow-hidden flex'>

            <div className='w-[50%] flex justify-center items-center'>
                <div className='w-full flex justify-center items-center h-full'>
                    <div className='w-[70%] h-[85%]'>
                        <img src={CardImage} className='w-[80%] mt-10' />
                    </div>
                </div>
            </div>

            <div className='w-[50%] flex justify-center items-center'>
                <div className='w-full flex justify-center items-end h-full'>

                    <div className='w-[70%] h-[85%]'>
                        <p className='text-white text-4xl mt-24 w-[32rem] leading-10'>Get exclusive NFT bundle from here.</p>
                        <p className='text-white w-[30rem] text-justify mt-8 leading-8'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi nulla, magnam officia saepe ratione facilis sint quo maiores, odio nihil porro quos assumenda suscipit necessitatibus commodi facere earum ullam asperiores! Consectetur unde ipsam modi odit recusandae mollitia rem repellendus facilis maxime natus reprehenderit doloribus repudiandae illum, repellat quo. Dolorem, quae?</p>
                        <div className='w-80 mt-8 flex justify-between'>
                            <button className='bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] px-6 py-2 rounded-lg text-white'>Learn more</button>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Bundle