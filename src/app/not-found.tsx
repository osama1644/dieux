import React from 'react'
import img1 from "@/assets/notfound.png"
import Image from 'next/image'
import Info from '@/components/Info'
import Footer from '@/components/Footer'
function NotFound() {
  return (
    <div className='flex flex-col gap-[50px]'>
<div className=' container-apply flex flex-col items-center gap-[20px]'>
  <Image src={img1} alt='not found image' width={460} height={415} />
  <h2 className='text-[#35356A] text-[30px] md:text-[45px] lg:text-[60px] text-center'>لا توجد نتائج مطابقة</h2>
  <p className='text-center text-lg md:text-xl lg:text-3xl text-[#999EB2]'>نعتذر، لا توجد نتائج مطابقة لبحثك. يرجى التحقق من كتابة البحث بشكل صحيح أو المحاولة بكلمات مختلفة</p>
</div>
<Info />
<Footer />
    </div>
  )
}

export default NotFound