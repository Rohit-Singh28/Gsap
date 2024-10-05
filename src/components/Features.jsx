import React from 'react'

const Features = () => {
  return (
    <div className=' w-full mt-32   '>
        <h1 className='text-white px-10 text-6xl'>Featured projects</h1>
        <div className='w-full pt-[1px] bg-zinc-800 mt-20'></div>
      <div className='flex gap-12 py-20 px-10 relative'>
        <div className=' w-1/2 h-[600px] bg-red-400 rounded-2xl overflow-hidden bg-[url("https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png")]'>
            <h1 className='text-6xl absolute bg-green-300  top-1/2 left-1/2 -translate-x-[50%]  '>HELLO BRO</h1>
        </div>

        <div className='w-1/2 h-[600px] bg-red-400 rounded-2xl overflow-hidden bg-[url("https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg")]'>
            <h1 className='text-6xl absolute bg-red-300 top-1/2 left-1/2 -translate-x-[50%] '>HELLO</h1>
        </div>


      </div>
        <div className='w-full pt-[1px] bg-zinc-800 mt-20'></div>
    </div>
  )
}

export default Features
