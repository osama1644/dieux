import React from "react";
import SectionHeader from "./SectionHeader";
import img1 from "@/assets/blogImg.png"
import img2 from "@/assets/Clock Circle.png"
import Image from "next/image";
import { Button } from "./ui/button";
function Blogs() {
  return (
    <div className=" container-apply">
      <SectionHeader
        title="احدث المقالات الخاصه بنا"
        subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt."
      />
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
        <div className="p-[25px] flex flex-col gap-[15px] border rounded-[10px]" dir="rtl">
          <Image src={img1} alt="blog img" width={300} height={300} className="w-full h-[290px]" />
          <div className="flex gap-2 items-center">
            <Image src={img2} alt="clock logo" width={25} height={25} />
            <p className="text-[#999EB2]">منذ 3 شهور </p>
          </div>
          <div className="spac-y-[12px]">
            <p className="text-[#35356A] text-[20px]">الحل الأمثل لجميع احتياجات الغسيل</p>
            <p className="text-[#999EB2] text-[18px]">نقدم محتوى تدريبيًا يغطي جميع الجوانب الأساسية والمتقدمة في مجال أمن المعلومات، مصمم خصيصًا لتلبية احتياجات المبتدئين والمحترفين.</p>
          </div>
          <div className="flex *:text-[#35356A] gap-[10px] *:bg-[#F5F5F7] *:rounded-[10px] *:p-[5px_10px]">
            <p>غسيل</p>
            <p>مسحوق</p>
            <p>تنشيف</p>
            <p>+2</p>
          </div>
          <Button className="text-white bg-[#283A90] hover:bg-[#283990c8] transition cursor-pointer">عرض تفاصيل اكثر</Button>
        </div>
        <div className="p-[25px] flex flex-col gap-[15px] border rounded-[10px]" dir="rtl">
          <Image src={img1} alt="blog img" width={300} height={300} className="w-full h-[290px]" />
          <div className="flex gap-2 items-center">
            <Image src={img2} alt="clock logo" width={25} height={25} />
            <p className="text-[#999EB2]">منذ 3 شهور </p>
          </div>
          <div className="spac-y-[12px]">
            <p className="text-[#35356A] text-[20px]">الحل الأمثل لجميع احتياجات الغسيل</p>
            <p className="text-[#999EB2] text-[18px]">نقدم محتوى تدريبيًا يغطي جميع الجوانب الأساسية والمتقدمة في مجال أمن المعلومات، مصمم خصيصًا لتلبية احتياجات المبتدئين والمحترفين.</p>
          </div>
          <div className="flex *:text-[#35356A] gap-[10px] *:bg-[#F5F5F7] *:rounded-[10px] *:p-[5px_10px]">
            <p>غسيل</p>
            <p>مسحوق</p>
            <p>تنشيف</p>
            <p>+2</p>
          </div>
          <Button className="text-white bg-[#283A90] hover:bg-[#283990c8] transition cursor-pointer">عرض تفاصيل اكثر</Button>
        </div>
        <div className="p-[25px] flex flex-col gap-[15px] border rounded-[10px] relative md:left-1/2 xl:left-0" dir="rtl">
          <Image src={img1} alt="blog img" width={300} height={300} className="w-full h-[290px]" />
          <div className="flex gap-2 items-center">
            <Image src={img2} alt="clock logo" width={25} height={25} />
            <p className="text-[#999EB2]">منذ 3 شهور </p>
          </div>
          <div className="spac-y-[12px]">
            <p className="text-[#35356A] text-[20px]">الحل الأمثل لجميع احتياجات الغسيل</p>
            <p className="text-[#999EB2] text-[18px]">نقدم محتوى تدريبيًا يغطي جميع الجوانب الأساسية والمتقدمة في مجال أمن المعلومات، مصمم خصيصًا لتلبية احتياجات المبتدئين والمحترفين.</p>
          </div>
          <div className="flex *:text-[#35356A] gap-[10px] *:bg-[#F5F5F7] *:rounded-[10px] *:p-[5px_10px]">
            <p>غسيل</p>
            <p>مسحوق</p>
            <p>تنشيف</p>
            <p>+2</p>
          </div>
          <Button className="text-white bg-[#283A90] hover:bg-[#283990c8] transition cursor-pointer">عرض تفاصيل اكثر</Button>
        </div>
      </div>
      <Button variant="outline" className=" w-[176px] !h-auto py-[19px] mx-auto block my-[50px] border-[#283A90] text-[#283A90] cursor-pointer text-[18px]"  >عرض الكل</Button>
    </div>
  );
}

export default Blogs;
