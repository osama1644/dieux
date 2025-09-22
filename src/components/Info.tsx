import Image from 'next/image'
import React from 'react'
import img1 from "@/assets/email1.png"
import img2 from "@/assets/Phone.png"
import img3 from "@/assets/MapPoint.png"
function Info() {
  return (
    <div className=' flex *:basis-[400px] *:md:basis-[300px]  flex-wrap justify-center items-center gap-2 mb-[50px] *:text-right *:h-[130px] border-y-2 '>
      <div className='grid grid-cols-3 gap-2 items-center justify-between border p-[20px]'>
        <div className='flex flex-col gap-[15px] col-span-2 '>
          <p className='text-[#35356A] font-normal '>تواصل معنا عبر البريد</p>
          <p className='text-[#999EB2] text-[]'>support@Dieux.com</p>
        </div >
          <div className='rounded-[15px] col-span-1 ml-auto w-[75px] h-[75px] flex justify-center items-center bg-gradient-to-br from-[#283A90] via-[#3d4ea41c] to-[#283A9000]'>
            <Image src={img1} alt='user img' width={30} height={30} className=' w-[30px] h-[30px]' />
          </div>
      </div>
      <div className='grid grid-cols-3 gap-2 items-center justify-between border p-[20px]'>
        <div className='flex flex-col gap-[15px] col-span-2 '>
          <p className='text-[#35356A] font-normal'>اتصل بنا في اي وقت</p>
          <p className='text-[#999EB2] text-[]'>+201025576136</p>
        </div>
          <div className='rounded-[15px] w-[75px] ml-auto h-[75px] flex justify-center items-center bg-gradient-to-br from-[#283A90] via-[#3d4ea41c] to-[#283A9000]'>
            <Image src={img2} alt='user img' width={30} height={30} className='w-[30px] h-[30px]' />
          </div>
      </div>
      <div className='grid grid-cols-3 gap-2 items-center justify-between border p-[20px]'>
        <div className='flex flex-col gap-[15px] col-span-2 '>
          <p className='text-[#35356A] font-normal'>العنوان الخاص بنا</p>
          <p className='text-[#999EB2] text-[]'> The Greek Campus - Dieux</p>
        </div>
          <div className='rounded-[15px] w-[75px] ml-auto h-[75px] flex justify-center items-center bg-gradient-to-br from-[#283A90] via-[#3d4ea41c] to-[#283A9000]'>
            <Image src={img3} alt='user img' width={30} height={30} className='w-[30px] h-[30px]' />
          </div>
      </div>
    </div>
  )
}

export default Info