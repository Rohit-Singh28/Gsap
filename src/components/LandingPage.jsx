import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const LandingPage = () => {
    return (
        <section  className='text-white w-full h-screen pt-1'>
            <div className='textsection mt-44 md:mt-52 pl-4 md:pl-14 lg:pl-20'>

                {["WE CREATE", "eye-opening", "presentations"].map((ele, indx) => {
                    return (
                        <div className=' masker flex'>
                            {indx === 1 && 
                                <motion.div 
                                    initial={{width:0}}
                                    animate={{width:"8vw"}}
                                    transition={{duration:1.2,ease:[0.76, 0, 0.24, 1]}}
                                    className='w-[8vw] h-[6vw]  bg-red-600 relative top-[18px] md:top-[2vw] mr-4'></motion.div>
                            }
                            <h1
                                className=' uppercase font-["Test Founders Grotesk X-Condensed"] text-[50px] md:text-[8vw] leading-[50px] md:leading-[8vw] -tracking-[5px] font-bold'>
                                {ele}</h1>
                        </div>
                    )
                })}
            </div>

            <div className='w-full pt-[1px] bg-zinc-800 mt-20'></div>

            <div className='flex justify-between mt-4 px-20 pb-5'>
                {["For public and private companies","From the first pitch to IPO"].map((ele,indx) => {
                    return(
                        <div className='' key={indx}>
                            <p>{ele}</p>
                        </div>
                    )
                })}
                <div className='flex gap-2'>
                    <button className='border border-white rounded-xl px-4 py-1'>Start the project</button>
                    <button className='border border-white rounded-[50%] px-3 pt-3'><GoArrowUpRight /></button>
                </div>
            </div>
        </section>
    )
}

export default LandingPage
