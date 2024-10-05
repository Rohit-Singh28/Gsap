import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Cards = () => {

    const ele = useRef();

    useGSAP(() => {
        // const tl = gsap.timeline({
        //     scrollTrigger : {

        //     }
        // });

        gsap.registerPlugin(ScrollTrigger);

        let allowScroll = true;

        let scrollTimeout = gsap.delayedCall(1,() => allowScroll = true)
      
          // Animation for the background color change or any other animation
          tl.to(ele.current, {
            // backgroundColor: 'red',

            transform:"translateX(-135%)",
            duration: 1,
            scrollTrigger: {
                trigger: ele.current,
                start: 'top ',
                end: 'top -300%', // Adjust based on how long you want the scroll
                scrub: 2,
                markers:true,
                // pin: true, // This will pin the landing page
              },
          });
    })

    return (
        <div className='h-screen w-full mt-18 overflow-hidden z-0 '> {/* Added overflow-x-auto for horizontal scrolling */}
            <div className='flex gap-6 whitespace-nowrap' ref={ele}> {/* Changed to flex and removed the wrapping div */}
                <div className='py-20 flex gap-6 px-8'>
                    <div className='w-[420px] h-[420px] bg-[#004D43] flex justify-center items-center'>
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    </div>
                    <div className='w-[420px] h-[420px] bg-[#CDEA68]'></div>
                    <div className='w-[420px] h-[420px] bg-[#CDEA68]'></div>
                    <div className='w-[420px] h-[420px] bg-[#CDEA68]'></div>
                    <div className='w-[420px] h-[420px] bg-[#CDEA68]'></div>
                    <div className='w-[420px] h-[420px] bg-[#CDEA68]'></div>
                    <div className='w-[420px] h-[420px] bg-[#CDEA68]'></div>
                    <div className='w-[420px] h-[420px] bg-[#CDEA68]'></div>
                    <div className='w-[420px] h-[420px] bg-[#CDEA68]'></div>
                    <div className='w-[420px] h-[420px] bg-[#CDEA68]'></div>
                </div>
            </div>
            <div className='w-full pt-[1px] bg-zinc-800 mt-20'></div>
        </div>
    );
};

export default Cards;
