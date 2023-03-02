import React from 'react'
import Banner from '../../Image/1.png'
import Card from '../../Image/Card.png'
const Landing = () => {
    return (
        <div className='w-full font-Montserrat h-screen overflow-hidden flex'>

        
                {/* Box1 */}
            <div className='w-[50%]   flex justify-center items-center'>
                <div className='w-full flex justify-center items-center h-full '>
                    <div className='w-[70%]  h-[85%] '>
                        <img src={Card} className="w-[80%] mt-10" />
                    </div>
                </div>
            </div>


                {/* Box2 */}
            <div className='w-[50%] flex justify-center items-center'>
                <div className='w-full flex justify-center items-end  h-full '>

                    <div className='w-[70%] h-[85%]'>
                        <p className='text-white text-4xl mt-24 w-[32rem]  leading-10'>Get exclusive NFT bundles from here. </p>
                        <p className='text-white w-[30rem]  text-justify mt-8 leading-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta nobis deleniti rerum obcaecati ad voluptatum explicabo sed rem voluptas nemo iste odio nam voluptates esse corrupti, dignissimos laudantium incidunt tenetur voluptate officiis, reprehenderit minima id. Exercitationem dolorem sint quod earum?</p>

                        <div className='flex w-80 mt-8 justify-between '>
                            <button className='bg-gradient-to-r from-[#BB47A6]  to-[#4E6DD8]  px-5 py-2 rounded-lg text-white '>Learn more</button>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
export default Landing