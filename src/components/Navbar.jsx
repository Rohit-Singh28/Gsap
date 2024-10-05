import React from 'react'

const Navbar = () => {
    return (
        <nav className='text-white w-full  px-20 py-8 font-["Neue Montreal"] flex justify-between items-center fixed z-50 navbar '>
            <div className='logo text-xl'>LOGO</div>
            <div className='links flex gap-8'>
                {["Services", "Our Work", "About Us", "Insight","Contact "].map((ele, indx) => {
                    return <a href="#" key={indx} className={`${indx === 4 ? "ml-32" : ""} capitalize text-lg`}>{ele}</a>
                })}
            </div>
        </nav>
    )
}

export default Navbar
