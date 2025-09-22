import React from 'react'
import img1 from "@/assets/1.png"
import img2 from "@/assets/2.png"
import img3 from "@/assets/3.png"
import Image from 'next/image'
function Sponsers() {
  return (
    <div className='my-[40px]'>
      <p className='text-[#35356A] font-medium text-center mb-6 text-[20px] md:text-[28px]'>شركاء نجاح</p>
      <div className='flex justify-center gap-[15px] md:gap-[55px] items-center px-4'>
        <div><Image src={img1} alt='sponser1' width={150} height={100} /></div>
        <div><Image src={img2} alt='sponser2' width={150} height={100} /></div>
        <div><Image src={img3} alt='sponser3' width={150} height={100} /></div>
      </div>
    </div>
  )
}

export default Sponsers