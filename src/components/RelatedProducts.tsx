import Image from 'next/image'
import React from 'react'
import img1 from "@/assets/StarsMinimalistic.png"
import img2 from "@/assets/persil.png"
import { Button } from './ui/button'
import ContactUs from './ContactUs'
import { ProfileForm } from './Form'
import SectionHeader from './SectionHeader'
import Info from './Info'
function RelatedProducts() {
  return (
    <div className='container-apply py-[100px] bg-[#F9F9FC] mt-[30px]'>
      <header className='flex justify-center items-center flex-col mb-[32px]'>
        <div className=''><Image src={img1} width={50} height={50} alt='' /></div>
        <h2 className='text-[#35356A] text-[36px] font-medium'>منتجات اخري قد تعجبك</h2>
      </header>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-[20px] mb-[40px]'>
         <div
          className="p-[25px] flex flex-col gap-[15px] border rounded-[10px] bg-white"
          dir="rtl"
        >
          <Image
            src={img2}
            alt="blog img"
            width={300}
            height={300}
            className="w-full h-[290px] object-contain"
          />
          <div className="flex gap-2 items-center">
            <Image src={img1} alt="clock logo" width={25} height={25} />
            <p className="text-[#999EB2]">منذ 3 شهور </p>
          </div>
          <div className="spac-y-[12px]">
            <p className="text-[#35356A] text-[20px]">
              الحل الأمثل لجميع احتياجات الغسيل
            </p>
            <p className="text-[#999EB2] text-[18px]">
              نقدم محتوى تدريبيًا يغطي جميع الجوانب الأساسية والمتقدمة في مجال
              أمن المعلومات، مصمم خصيصًا لتلبية احتياجات المبتدئين والمحترفين.
            </p>
          </div>
          <div className="flex *:text-[#35356A] gap-[10px] *:bg-[#F5F5F7] *:rounded-[10px] *:p-[5px_10px]">
            <p>غسيل</p>
            <p>مسحوق</p>
            <p>تنشيف</p>
            <p>+2</p>
          </div>
          <Button className="text-white bg-[#283A90] hover:bg-[#283990c8] transition cursor-pointer">
            عرض تفاصيل اكثر
          </Button>
        </div>
         <div
          className="p-[25px] flex flex-col gap-[15px] border rounded-[10px] bg-white"
          dir="rtl"
        >
          <Image
            src={img2}
            alt="blog img"
            width={300}
            height={300}
            className="w-full h-[290px] object-contain"
          />
          <div className="flex gap-2 items-center">
            <Image src={img1} alt="clock logo" width={25} height={25} />
            <p className="text-[#999EB2]">منذ 3 شهور </p>
          </div>
          <div className="spac-y-[12px]">
            <p className="text-[#35356A] text-[20px]">
              الحل الأمثل لجميع احتياجات الغسيل
            </p>
            <p className="text-[#999EB2] text-[18px]">
              نقدم محتوى تدريبيًا يغطي جميع الجوانب الأساسية والمتقدمة في مجال
              أمن المعلومات، مصمم خصيصًا لتلبية احتياجات المبتدئين والمحترفين.
            </p>
          </div>
          <div className="flex *:text-[#35356A] gap-[10px] *:bg-[#F5F5F7] *:rounded-[10px] *:p-[5px_10px]">
            <p>غسيل</p>
            <p>مسحوق</p>
            <p>تنشيف</p>
            <p>+2</p>
          </div>
          <Button className="text-white bg-[#283A90] hover:bg-[#283990c8] transition cursor-pointer">
            عرض تفاصيل اكثر
          </Button>
        </div>
         <div
          className="p-[25px] flex flex-col gap-[15px] border rounded-[10px] bg-white"
          dir="rtl"
        >
          <Image
            src={img2}
            alt="blog img"
            width={300}
            height={300}
            className="w-full h-[290px] object-contain"
          />
          <div className="flex gap-2 items-center">
            <Image src={img1} alt="clock logo" width={25} height={25} />
            <p className="text-[#999EB2]">منذ 3 شهور </p>
          </div>
          <div className="spac-y-[12px]">
            <p className="text-[#35356A] text-[20px]">
              الحل الأمثل لجميع احتياجات الغسيل
            </p>
            <p className="text-[#999EB2] text-[18px]">
              نقدم محتوى تدريبيًا يغطي جميع الجوانب الأساسية والمتقدمة في مجال
              أمن المعلومات، مصمم خصيصًا لتلبية احتياجات المبتدئين والمحترفين.
            </p>
          </div>
          <div className="flex *:text-[#35356A] gap-[10px] *:bg-[#F5F5F7] *:rounded-[10px] *:p-[5px_10px]">
            <p>غسيل</p>
            <p>مسحوق</p>
            <p>تنشيف</p>
            <p>+2</p>
          </div>
          <Button className="text-white bg-[#283A90] hover:bg-[#283990c8] transition cursor-pointer">
            عرض تفاصيل اكثر
          </Button>
        </div>
      </div>
      <Button variant="outline" className='border-[#283A90] text-[#283A90] block mx-auto w-[170px] bg-[#F9F9FC]'>عرض الكل</Button>
      <SectionHeader title='تواصل معنا عبر البريد' subtitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, ullam!' />
    <div className='grid gap-[40px]'>
        <ProfileForm />
      <Info />
    </div>

    </div>
  )
}

export default RelatedProducts