import React from 'react'
import Images from '../../Image/1.png'
const Landing = () => {
  return (
    <div className='w-full h-fit overflow-hidden flex font-Montserrat'>
    <div className='w-[50%] flex justify-center items-center '>
        <div className='w-full flex justify-center items-center h-full'>
            <div className='w-[70%] h-[85%]'>
                <p className='text-white mt-10 text-lg'>BEST NFT MARKETPLACE</p>
                <p className='text-white text-4xl mt-5 w-[28rem] leading-10'>Discover the latest <br/> NFT Marketplace</p>
                <p className='text-white w-[30rem] text-justify mt-8 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas neque minus quidem deleniti veritatis reiciendis assumenda ullam odio consequuntur repudiandae fugit, sunt totam ab voluptates laboriosam? Rerum numquam architecto fuga nemo id molestiae ut iure itaque reiciendis cum, ea distinctio eveniet, perferendis, et mollitia beatae facere soluta? Quae, deserunt? Similique.</p>
               <div className='w-80 mt-4 flex justify-between '>
                <button className='bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] px-5 py-2 text-white rounded-lg '>Try for free</button>
                <button className='bg-transparent hover:bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] text-white border rounded-lg hover:border-none px-4 py-2 '>Learn more</button>
               </div> 
               <div className='w-80 h-32 mt-4 flex justify-center bg-gray-700 rounded-lg blur-10'>
                <div className='w-36 text-white h-8 mt-2'>
                <h1>Action Ending in</h1>
                </div>
                <div className='w-80 h-14  absolute mt-14 flex justify-around'>
                    <div className='text-white'>
                        <span className='text-2xl font-bold'>20</span>
                        <br/>
                        <span className='text-sm'>Hors</span>
                    </div>
                    <div className='text-white'>
                        <span className='text-2xl font-bold'>20</span>
                        <br/>
                        <span className='text-sm'>Min</span>
                    </div>
                    <div className='text-white'>
                        <span className='text-2xl font-bold'>20</span>
                        <br/>
                        <span className='text-sm'>Sec</span>
                    </div>
                </div>
               </div>
            </div>
        </div>
    </div>
    <div className='w-[50%] flex justify-center items-center '>
        <div className='w-full h-full flex justify-center'>
            <div className='w-[80%] h-[100%]'>
                <img src={Images}/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Landing