import Image from 'next/image'
import React from 'react'
import img1 from "@/assets/heroImg.jpg"
import img2 from "@/assets/Union.png"
function AboutPageWhyUs() {
  return (
    <div className='container-apply mb-[100px]'>
      <div className='grid md:grid-cols-2 gap-2 mb-[30px] items-center'>
        <Image width={800} height={390} src={img1}  alt='hero image' className='w-full'/>
        <div dir='rtl' className='flex flex-col gap-[30px] '>
          <h2 className='text-[#35356A] text-xl md:text-2xl lg:text-[40px] font-normal'>أبدأ رحلة التعلم الخاصة بك الان! أبدأ رحلة التعلم الخاصة بك الان!</h2>
          <p className='text-[#999EB2] text-[14px] lg:text-lg font-normal'>يوفر الكورس محتوى شامل يغطي مختلف جوانب البرمجة بشكل شامل، مما يساعد الطلاب على فهم المفاهيم الأساسية والمتقدمة في عالم البرمجة.يوفر الكورس محتوى شامل يغطي مختلف جوانب البرمجة بشكل شامل، مما يساعد الطلاب على فهم المفاهيم الأساسية والمتقدمة في عالم البرمجة.</p>
        </div>
        </div>
         <div className='grid md:grid-cols-2 lg:grid-cols-3'>
          <div className="flex flex-col gap-[20px] text-[#35356A] text-2xl font-normal bg-white p-[30px] rounded-[15px]" dir="rtl">
          <div className=" w-[88px] h-[88px] rounded-2xl flex justify-center items-center bg-gradient-to-br from-[#283A90] via-[#3d4ea41c] to-[#283A9000]">
            {" "}
            <Image src={img2} alt="service logo" width={36} height={36} className="bg-transparent" />
          </div>
          <p>محتوى متقدم وشامل</p>
          <p className="text-[#999EB2] text-lg">نقدم محتوى تدريبيًا يغطي جميع الجوانب الأساسية والمتقدمة في مجال أمن المعلومات، مصمم خصيصًا لتلبية احتياجات المبتدئين والمحترفين.</p>
        </div>
        <div className="flex flex-col gap-[20px] text-[#35356A] text-2xl font-normal bg-white p-[30px] rounded-[15px]" dir="rtl">
          <div className=" w-[88px] h-[88px] rounded-2xl flex justify-center items-center bg-gradient-to-br from-[#283A90] via-[#3d4ea41c] to-[#283A9000]">
            {" "}
            <Image src={img2} alt="service logo" width={36} height={36} className="bg-transparent" />
          </div>
          <p>محتوى متقدم وشامل</p>
          <p className="text-[#999EB2] text-lg">نقدم محتوى تدريبيًا يغطي جميع الجوانب الأساسية والمتقدمة في مجال أمن المعلومات، مصمم خصيصًا لتلبية احتياجات المبتدئين والمحترفين.</p>
        </div>
        <div className="flex flex-col gap-[20px] text-[#35356A] text-2xl font-normal bg-white p-[30px] rounded-[15px]" dir="rtl">
          <div className=" w-[88px] h-[88px] rounded-2xl flex justify-center items-center bg-gradient-to-br from-[#283A90] via-[#3d4ea41c] to-[#283A9000]">
            {" "}
            <Image src={img2} alt="service logo" width={36} height={36} className="bg-transparent" />
          </div>
          <p>محتوى متقدم وشامل</p>
          <p className="text-[#999EB2] text-lg">نقدم محتوى تدريبيًا يغطي جميع الجوانب الأساسية والمتقدمة في مجال أمن المعلومات، مصمم خصيصًا لتلبية احتياجات المبتدئين والمحترفين.</p>
        </div>
         
      </div>
    </div>
  )
}

export default AboutPageWhyUs