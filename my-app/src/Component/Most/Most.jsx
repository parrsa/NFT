import React from 'react'
import Images1 from '../../Image/1_d1bf6WZVbvFOPs4tURIqhw.jpeg'
import Images2 from '../../Image/Abstract_Art_NFTs_001_1630824702552.png'
import Images3 from '../../Image/istockphoto-1164830992-612x612-1.jpg'
import Person1 from '../../Image/aiony-haust-3TLl_97HNJo-unsplash.jpg'
import Person2 from '../../Image/melissa-mjoen-2LehKnf61PA-unsplash (1).jpg'
import Person3 from '../../Image/one-zone-studio-fA_EGdXevao-unsplash.jpg'
const Most = () => {
  return (
    <div className='w-full  text-white font-Montserrat h-screen  overflow-hidden '>

    <div className='flex justify-center sm:items-center mt-10' >
        <h1 className=' text-3xl font-bold leading-[4rem] text-center'>
            Most popular artist
        </h1>
        <p className='absolute mt-32 text-center w-[28rem] '> commodi assumenda iusto cupiditate eaque temporibus dolor porro natus, nulla est quas. Quod ipsa voluptatibus nemo quia?</p>
    </div>

    <div className='w-full h-full mt-36  flex justify-evenly items-center relative'>
        <div className='grid grid-cols-3 mt-10 grid-rows-2 '>

            <div className='w-[280px] h-[350px] col-span-1 flex justify-start ml-2 rounded-2xl p-0.5 bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8]'>
                <div className='w-full h-full flex justify-center rounded-2xl bg-[#0A0F29]'>
                <div className='w-[95%]  mt-2 rounded-2xl h-28 flex justify-center'>
                    <img src={Images1} className="w-full h-full rounded-2xl"/>
                    <div className='w-[70px] h-[70px] rounded-full flex justify-center items-center absolute mt-16 mr-2'>
                        <img src={Person1} className='w-full h-full rounded-full' />
                    </div>
                </div>
                <div className='absolute flex justify-center w-64 mr-2 h-48  mt-36'>
                    <h1 className='mt-2 font-bold text-center'>Follow</h1>
                    <div className='w-60 text-center h-16 absolute mt-10 '>
                        <h1 className='font-bold text-xl'>Selena Gomez</h1>
                        <p className='text-sm leading-5 text-gray-500'>Lorem ipsum dolor sit amet consectetur</p>
                        <div className='w-[85%] ml-5 mt-4 bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] h-0.5'></div>
                        <div className='w-64 -ml-2 flex justify-around h-20 mt-3'>
                            <span className='text-sm'>Art word <p className='text-gray-600 font-bold mt-3'>56</p></span>
                            <span className='text-sm'>Follower<p className='text-gray-600 font-bold mt-3'>1.6K</p></span>
                            <span className='text-sm'>Following<p className='text-gray-600 font-bold mt-3'>100</p></span>
                        </div>
                    </div>
                </div>
                </div>
            </div>



            <div className='w-[330px] h-[420px] col-span-1 flex justify-start  rounded-2xl p-0.5 bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8]'>
                <div className='w-full h-full flex justify-center rounded-2xl bg-[#0A0F29]'>
                <div className='w-[95%]  mt-2 rounded-2xl h-28 flex justify-center'>
                    <img src={Images2} className="w-full h-full rounded-2xl"/>
                    <div className='w-[70px] h-[70px] rounded-full flex justify-center items-center absolute mt-16 mr-2'>
                        <img src={Person2} className='w-full h-full rounded-full' />
                    </div>
                </div>
                <div className='absolute flex justify-center w-64 mr-2 h-48  mt-44'>
                    <h1 className='mt-2 font-bold text-center'>Follow</h1>
                    <div className='w-60 text-center h-16 absolute mt-10 '>
                        <h1 className='font-bold text-xl'>Selena Gomez</h1>
                        <p className='text-sm leading-5 text-gray-500'>Lorem ipsum dolor sit amet consectetur</p>
                        <div className='w-[85%] ml-5 mt-4 bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] h-0.5'></div>
                        <div className='w-64 -ml-2 flex justify-around h-20 mt-3'>
                            <span className='text-sm'>Art word <p className='text-gray-600 font-bold mt-3'>56</p></span>
                            <span className='text-sm'>Follower<p className='text-gray-600 font-bold mt-3'>1.6K</p></span>
                            <span className='text-sm'>Following<p className='text-gray-600 font-bold mt-3'>100</p></span>
                        </div>
                    </div>
                </div>
                </div>
            </div>





            <div className='w-[280px] h-[350px] col-span-1 flex justify-start ml-10 rounded-2xl p-0.5 bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8]'>
                <div className='w-full h-full flex justify-center rounded-2xl bg-[#0A0F29]'>
                <div className='w-[95%]  mt-2 rounded-2xl h-28 flex justify-center'>
                    <img src={Images3} className="w-full h-full rounded-2xl"/>
                    <div className='w-[70px] h-[70px] rounded-full flex justify-center items-center absolute mt-16 mr-2'>
                        <img src={Person3} className='w-full h-full rounded-full' />
                    </div>
                </div>
                <div className='absolute flex justify-center w-64 mr-2 h-48  mt-36'>
                    <h1 className='mt-2 font-bold text-center'>Follow</h1>
                    <div className='w-60 text-center h-16 absolute mt-10 '>
                        <h1 className='font-bold text-xl'>Selena Gomez</h1>
                        <p className='text-sm leading-5 text-gray-500'>Lorem ipsum dolor sit amet consectetur</p>
                        <div className='w-[85%] ml-5 mt-4 bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] h-0.5'></div>
                        <div className='w-64 -ml-2 flex justify-around h-20 mt-3'>
                            <span className='text-sm'>Art word <p className='text-gray-600 font-bold mt-3'>56</p></span>
                            <span className='text-sm'>Follower<p className='text-gray-600 font-bold mt-3'>1.6K</p></span>
                            <span className='text-sm'>Following<p className='text-gray-600 font-bold mt-3'>100</p></span>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </div>
    </div>

    </div>
  )
}

export default Most