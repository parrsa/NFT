import React from 'react'
import Shoping from '../../Image/Shopping Mall.png'
import Sell from '../../Image/Sell.png'
const Banner = () => {
    return (
        <div class="w-full h-72 mt-10 ">
            <div class="h-72 w-[99%] ml-2 rounded-md bg-gradient-to-r from-[#BB47A6]  to-[#4E6DD8]  p-0.5">
                <div class="flex h-full bg-[#0A0F29] bg-opacity-90 ">

                        {/* Box-1 */}
                    <div className='w-[50%]  h-full '>

                        <div className='w-full  flex justify-center items-center h-full '>

                            <div className='w-[70%]   flex justify-start items-center h-[85%]'>

                                <div className='w-[80%] h-full text-white flex justify-end items-center '>
                                    <h1 className='text-center text-3xl  font-bold'>We provide everything <br/><span>that you need</span> </h1>
                                </div>

                                <div className='w-1 h-32 ml-28 bg-gradient-to-r from-[#BB47A6]  to-[#4E6DD8]'> </div>
                            </div>
                        </div>
                    </div>
                        {/* End-BOx1 */}
                        {/* Start-Box2 */}
                    <div className='w-[50%]  h-full '>

                        <div className='w-full  flex justify-start items-center h-full '>

                            <div className='w-[70%] h-[85%] flex gap-28 '>

                                <div className='w-[50%] h-full flex   justify-center'>
                                    <div className='w-16 h-16 mt-10 bg-pink-500 flex justify-center items-center rounded-full'>
                                        <img src={Shoping} className="w-10 h-10" />
                                    </div>
                                    <div className='w-64 text-white text-center h-32 absolute mt-28'>
                                        <h1>Buy NFT</h1>
                                        <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores soluta, dolorem eaque molestiae distinctio ?</p>
                                    </div>
                                </div>


                                <div className='w-[50%] h-full flex   justify-center'>
                                    <div className='w-16 h-16 mt-10 bg-blue-500 flex justify-center items-center rounded-full'>
                                        <img src={Sell} className="w-10 h-10" />
                                    </div>
                                    <div className='w-64 text-white text-center h-32 absolute mt-28'>
                                        <h1>Sell NFT</h1>
                                        <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores soluta, dolorem eaque molestiae distinctio ?</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    {/* End-Box2 */}


                </div>
            </div>
        </div>
    )
}

export default Banner