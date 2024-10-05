import React from 'react'
import { motion } from 'framer-motion'

const Margue = () => {
    return (
        <div  className='w-full bg-[#004D43] text-white py-20 rounded-tr-3xl rounded-tl-3xl'>
            <div className='flex  whitespace-nowrap border-t-2 border-b-2 border-zinc-300 overflow-hidden'>
                <motion.h1
                    initial={{x:0}}
                    animate={{x:"-100%"}}
                    transition={{ease:'linear',duration:5 , repeat:Infinity}}
                    className='text-[22vw] leading-none font-["Test Founders Grotesk X-Condensed"]  font-semibold -tracking-[1vw] pr-10 mb-4 mt-2 '>WE ARE OCHI</motion.h1>
                <motion.h1
                    initial={{x:0}}
                    animate={{x:"-100%"}}
                    transition={{ease:'linear',duration:5 , repeat:Infinity}}
                    className='text-[22vw] leading-none font-["Test Founders Grotesk X-Condensed"]  font-semibold -tracking-[1vw] pr-10 mb-4 mt-2 '>WE ARE OCHI</motion.h1>
            </div>
        </div>
    )
}

export default Margue
