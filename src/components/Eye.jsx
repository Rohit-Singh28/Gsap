import React, { useEffect, useState } from 'react'

const Eye = () => {

  const[rotate,setRotate] = useState(0);


  useEffect(() => {
    window.addEventListener("mousemove",(e) => {
      const x = e.clientX;
      const y = e.clientY;

      const delX = x - window.innerWidth/2;
      const delY = y - window.innerHeight/2;

      const angle = Math.atan2(delY,delX)*(180/Math.PI);

      setRotate(angle-180);

      // console.log(rotate);
      
      
    })
  },[])

  return (
    <div className='w-full h-[400px] md:h-screen overflow-hidden'>
      <div  className='w-full h-full relative bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] '>
        <div className='w-4/3  h-[300px] absolute  gap-20 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex justify-between items-center px-10'>
         
          <div className='w-[15vw] h-[15vw] rounded-full bg-white flex justify-center items-center'>
            <div className='w-1/2 h-1/2 bg-zinc-900 rounded-full flex justify-center items-center'>
              <div  className={`w-full h-10`} style={{transform:`rotate(${rotate}deg)`}}>
                <div className='w-6 h-6 bg-white rounded-full'>
                </div>
              </div>
            </div>
          </div>

          <div className='w-[15vw] h-[15vw] rounded-full bg-white flex justify-center items-center'>
            <div className='w-1/2 h-1/2 bg-zinc-900 rounded-full flex justify-center items-center'>
              <div  className={`w-full h-10`} style={{transform:`rotate(${rotate}deg)`}}>
                <div className='w-6 h-6 bg-white rounded-full'>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Eye
