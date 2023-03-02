import React from 'react'
import Images from '../../Image/circle.png'
const CreateNft = () => {
  return (
    <div className='w-full h-96 flex justify-center items-center'>

        <div className='w-96 h-64 flex justify-center items-center opacity-30'>
            <img src={Images}  />
        </div>

        <div className='w-96 h-64 flex justify-center text-center absolute'>
            <h1 className='text-3xl mt-14 font-bold ml-10 text-white text-center'>Create Your NFT</h1>
            <p className='text-white absolute mt-24 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus ut eveniet facilis cumque tenetur quasi cum vitae, dolor maxime magni?</p>
           <button className='absolute mt-44 text-white px-7 rounded-lg py-2 bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8]'>Try for now </button>
        </div>

    </div>
  )
}

export default CreateNft