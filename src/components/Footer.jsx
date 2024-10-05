import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-screen py-8 flex text-white overflow-hidden z-40'>
            <div className='w-1/2  font-semibold uppercase flex flex-col justify-between px-10 leading-none '>
                <div className='text-8xl -tracking-[5px]'>
                    <h1>EYE-</h1>
                    <h1>opening</h1>
                </div>
                <h1 className='text-4xl'>Ochi</h1>
            </div>
            <div className='w-1/2'>
            <div className='text-8xl -tracking-[5px] uppercase font-semibold'>
                    <h1>presentations</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer
