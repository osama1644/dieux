import Image from 'next/image'
import React from 'react'
import img1 from "@/assets/details.png"
function OneProdDetails() {
  return (
    <div>
      <header className='flex items-center gap-[20px] mb-[20px]'>
        <div className='w-[62px] h-[62px] flex justify-center items-center bg-[#F9F9FC] rounded-[10px]'><Image src={img1} alt='details image' width={28}height={28} /></div>
        <h2 className='text-[#35356A] text-[24px] font-semibold'>تفاصيل المنتج</h2>
      </header>
     <div className='flex flex-col gap-[20px]'>
     <div className='grid grid-cols-2 lg:grid-cols-3 gap-[10px]'>
        <p className='p-[10px] lg:col-span-1 border rounded-[10px] bg-[#EBEBEB] text-center'>اسم العلامة التجارية</p>
        <p className='p-[10px] lg:col-span-2 border rounded-[10px] flex items-center'>DIEUX</p>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-[10px]'>
        <p className='p-[10px] lg:col-span-1 border rounded-[10px] bg-[#EBEBEB] text-center'>شكل المنتج </p>
        <p className='p-[10px] lg:col-span-2 border rounded-[10px] flex items-center'>مسحوق</p>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-[10px]'>
        <p className='p-[10px] lg:col-span-1 border rounded-[10px] bg-[#EBEBEB] text-center'>رائحة</p>
        <p className='p-[10px] lg:col-span-2 border rounded-[10px] flex items-center'>خلاصة العطور</p>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-[10px]'>
        <p className='p-[10px] lg:col-span-1 border rounded-[10px] bg-[#EBEBEB] text-center'>إحصاء الوحدات</p>
        <p className='p-[10px] lg:col-span-2 border rounded-[10px] flex items-center'>1000 Grams</p>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-[10px]'>
        <p className='p-[10px] lg:col-span-1 border rounded-[10px] bg-[#EBEBEB] text-center'>عدد العناصر</p>
        <p className='p-[10px] lg:col-span-2 border rounded-[10px] flex items-center'>1</p>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-[10px]'>
        <p className='p-[10px] lg:col-span-1 border rounded-[10px] bg-[#EBEBEB] text-center'>نوع التركيبة</p>
        <p className='p-[10px] lg:col-span-2 border rounded-[10px] flex items-center'>كفاءة عالية, مركزة</p>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-[10px]'>
        <p className='p-[10px] lg:col-span-1 border rounded-[10px] bg-[#EBEBEB] text-center'>استخدامات محددة للمنتج</p>
        <p className='p-[10px] lg:col-span-2 border rounded-[10px] flex items-center'>يُغسل في الغسالة</p>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-[10px]'>
        <p className='p-[10px] lg:col-span-1 border rounded-[10px] bg-[#EBEBEB] text-center'>وزن السلعة</p>
        <p className='p-[10px] lg:col-span-2 border rounded-[10px] flex items-center'>1 كيلوجرام</p>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-[10px]'>
        <p className='p-[10px] lg:col-span-1 border rounded-[10px] bg-[#EBEBEB] text-center'>نوع البشرة</p>
        <p className='p-[10px] lg:col-span-2 border rounded-[10px] flex items-center'>الكل</p>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-[10px]'>
        <p className='p-[10px] lg:col-span-1 border rounded-[10px] bg-[#EBEBEB] text-center'>أبعاد السلعة</p>
        <p className='p-[10px] lg:col-span-2 border rounded-[10px] flex items-center'>50 x 50 x 50 ملي متر</p>
      </div>
     </div>
    </div>
  )
}

export default OneProdDetails