import React from 'react'

const About = () => {
  return (
    <div  className='w-full bg-[#CDEA68] py-20 px-10'>
        <h1 
            className='text-[40px] lg:text-[55px] leading-[70px] -tracking-[2px] mr-10 md:mr-32'    
        >Ochi is a strategic presentation agency for forward-thinking businesses that need to <u>raise funds, sell products, explain complex ideas, and hire great people</u>.</h1>
    
    
    <div className='w-full pt-[1px] bg-[#acc64e] mt-20'></div>

    <div className='flex py-20'>
        <div className='w-1/2 '>
            <h1 className='text-5xl'>Our approach:</h1>
            <button 
                className='text-white flex justify-center items-center gap-4 mt-8 bg-black py-3 px-4 rounded-full font-semibold text-xl'>READ MORE 
                <div className='w-1 p-1 bg-white rounded-[50%]'></div>
            </button>
        </div>
        <div className='w-1/2 h-[70vh] rounded-lg bg-[#acba7a]'>
    
        </div>
    </div>
    </div>
  )
}

export default About
