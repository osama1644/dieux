import React from "react";
import SectionHeader from "./SectionHeader";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import img1 from "@/assets/Profile.png";
function Testimonials() {
  return (
    <div className=" pb-[40px]">
      <SectionHeader
        title="أراء العملاء الخاصه بنا"
        subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt."
      />
      <div className=" container-apply grid md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        <div className=" flex flex-col gap-[50px] border-1 px-5 py-10">
          <div className="flex items-center gap-3 justify-center">
            <div className=" space-y-0.5" dir="rtl">
              <p className="text-[#35356A]">راسكو جمال</p>
              <p className="text-[#9F9F9F]">مشترك في كورس البرمجه</p>
            </div>
            <div>
              <Image
                src={img1}
                alt="person"
                width={50}
                height={50}
                className="w-[60px] h-[60px] rounded-full"
              />
            </div>
          </div>
          <div className="bg-[#F9F9FC] p-[50px_30px] rounded-2xl relative" dir="rtl">
            <p className="text-[#35356A] text-lg">
              كانت تجربة رائعة جدًا مع كورس البرمجة! استمتعت بالمحتوى الشيق
              والشروحات الواضحة. شكرًا جزيلاً للفريق على جهودهم الكبيرة في إعداد
              هذا الكورس.
            </p>
            <div dir="ltr" className=" absolute flex border-1 bg-white  p-[10px_16px] rounded-[100px] *:text-amber-300 *:w-[24px] *:h-[24px] gap-2 top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 " >
              <FaStar  />
              <FaStar  />
              <FaStar  />
              <FaStar  />
              <FaStar  />
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-[50px] border-1 px-5 py-10">
          <div className="flex items-center gap-3 justify-center">
            <div className=" space-y-0.5" dir="rtl">
              <p className="text-[#35356A]">راسكو جمال</p>
              <p className="text-[#9F9F9F]">مشترك في كورس البرمجه</p>
            </div>
            <div>
              <Image
                src={img1}
                alt="person"
                width={50}
                height={50}
                className="w-[60px] h-[60px] rounded-full"
              />
            </div>
          </div>
          <div className="bg-[#F9F9FC] p-[50px_30px] rounded-2xl relative" dir="rtl">
            <p className="text-[#35356A] text-lg">
              كانت تجربة رائعة جدًا مع كورس البرمجة! استمتعت بالمحتوى الشيق
              والشروحات الواضحة. شكرًا جزيلاً للفريق على جهودهم الكبيرة في إعداد
              هذا الكورس.
            </p>
            <div dir="ltr" className=" absolute flex border-1 bg-white p-[10px_16px] rounded-[100px] *:text-amber-300 *:w-[24px] *:h-[24px] gap-2 top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 " >
              <FaStar  />
              <FaStar  />
              <FaStar  />
              <FaStar  />
              <FaStar  />
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-[50px] border-1 px-5 py-10 md:left-1/2 relative lg:left-0 ">
          <div className="flex items-center gap-3 justify-center">
            <div className=" space-y-0.5" dir="rtl">
              <p className="text-[#35356A]">راسكو جمال</p>
              <p className="text-[#9F9F9F]">مشترك في كورس البرمجه</p>
            </div>
            <div>
              <Image
                src={img1}
                alt="person"
                width={50}
                height={50}
                className="w-[60px] h-[60px] rounded-full"
              />
            </div>
          </div>
          <div className="bg-[#F9F9FC] p-[50px_30px] rounded-2xl relative" dir="rtl">
            <p className="text-[#35356A] text-lg">
              كانت تجربة رائعة جدًا مع كورس البرمجة! استمتعت بالمحتوى الشيق
              والشروحات الواضحة. شكرًا جزيلاً للفريق على جهودهم الكبيرة في إعداد
              هذا الكورس.
            </p>
            <div dir="ltr" className=" absolute flex border-1 bg-white p-[10px_16px] rounded-[100px] *:text-amber-300 *:w-[24px] *:h-[24px] gap-2 top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 " >
              <FaStar  />
              <FaStar  />
              <FaStar  />
              <FaStar  />
              <FaStar  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
