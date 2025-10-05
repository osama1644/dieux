import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import img1 from "@/assets/Union.png"
import img2 from "@/assets/checkmark-badge.png"
import Link from "next/link";
import { Button } from "./ui/button";

function WhyUS() {
  return (
    <div className=" bg-[#F9F9FC] pb-[50px]">
      <SectionHeader
        title="لماذا تختار محتوانا ؟ "
        subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt."
      />
      <div className=" container-apply grid gap-5 xl:gap-0 xl:grid-cols-5">
        <div className="grid lg:grid-cols-2 gap-[30px] col-span-3">
              <div className="flex flex-col gap-[20px] text-[#35356A] text-2xl font-normal bg-white p-[30px] rounded-[15px]" dir="rtl">
                    <div className=" w-[88px] h-[88px] rounded-2xl flex justify-center items-center bg-[linear-gradient(131deg,rgba(40,58,144,0.20)_-66.81%,rgba(40,58,144,0)_37.19%)] border-[#F5F5F7] border">
                      {" "}
                      <Image src={img1} alt="service logo" width={36} height={36} className="bg-transparent" />
                    </div>
                    <p>محتوى متقدم وشامل</p>
                    <p className="text-[#999EB2] text-lg">نقدم محتوى تدريبيًا يغطي جميع الجوانب الأساسية والمتقدمة في مجال أمن المعلومات، مصمم خصيصًا لتلبية احتياجات المبتدئين والمحترفين.</p>
                  </div>
              <div className="flex flex-col gap-[20px] text-[#35356A] text-2xl font-normal bg-white p-[30px] rounded-[15px]" dir="rtl">
                    <div className=" w-[88px] h-[88px] rounded-2xl flex justify-center items-center bg-[linear-gradient(131deg,rgba(40,58,144,0.20)_-66.81%,rgba(40,58,144,0)_37.19%)] border-[#F5F5F7] border">
                      {" "}
                      <Image src={img1} alt="service logo" width={36} height={36} className="bg-transparent" />
                    </div>
                    <p>محتوى متقدم وشامل</p>
                    <p className="text-[#999EB2] text-lg">نقدم محتوى تدريبيًا يغطي جميع الجوانب الأساسية والمتقدمة في مجال أمن المعلومات، مصمم خصيصًا لتلبية احتياجات المبتدئين والمحترفين.</p>
                  </div>
              <div className="flex flex-col gap-[20px] text-[#35356A] text-2xl font-normal bg-white p-[30px] rounded-[15px]" dir="rtl">
                    <div className=" w-[88px] h-[88px] rounded-2xl flex justify-center items-center bg-[linear-gradient(131deg,rgba(40,58,144,0.20)_-66.81%,rgba(40,58,144,0)_37.19%)] border-[#F5F5F7] border">
                      {" "}
                      <Image src={img1} alt="service logo" width={36} height={36} className="bg-transparent" />
                    </div>
                    <p>محتوى متقدم وشامل</p>
                    <p className="text-[#999EB2] text-lg">نقدم محتوى تدريبيًا يغطي جميع الجوانب الأساسية والمتقدمة في مجال أمن المعلومات، مصمم خصيصًا لتلبية احتياجات المبتدئين والمحترفين.</p>
                  </div>
              <div className="flex flex-col gap-[20px] text-[#35356A] text-2xl font-normal bg-white p-[30px] rounded-[15px]" dir="rtl">
                    <div className=" w-[88px] h-[88px] rounded-2xl flex justify-center items-center bg-[linear-gradient(131deg,rgba(40,58,144,0.20)_-66.81%,rgba(40,58,144,0)_37.19%)] border-[#F5F5F7] border">
                      {" "}
                      <Image src={img1} alt="service logo" width={36} height={36} className="bg-transparent" />
                    </div>
                    <p>محتوى متقدم وشامل</p>
                    <p className="text-[#999EB2] text-lg">نقدم محتوى تدريبيًا يغطي جميع الجوانب الأساسية والمتقدمة في مجال أمن المعلومات، مصمم خصيصًا لتلبية احتياجات المبتدئين والمحترفين.</p>
                  </div>
        </div>
        <div dir="rtl" className=" col-span-3 xl:col-span-2 flex flex-col gap-[30px]">
          <h2 className="text-[#35356A] text-[20px] md:text-[35px] xl:text-[45px] font-normal mb-[60px]">أبدأ رحلة التعلم الخاصة بك الان! أبدأ رحلة التعلم الخاصة بك الان!</h2>
          <div className=" space-y-[17px]">
            <div className="flex gap-[10px]">
              <Image src={img2} alt="logo" width={25} height={25} />
              <p className="text-[20px] font-normal text-[#35356A]">محتوي مجدد باستمرار</p>
            </div>
            <div className="flex gap-[10px]">
              <Image src={img2} alt="logo" width={25} height={25} />
              <p className="text-[20px] font-normal text-[#35356A]">اختبارات علمية علي المحتوي</p>
            </div>
            <div className="flex gap-[10px]">
              <Image src={img2} alt="logo" width={25} height={25} />
              <p className="text-[20px] font-normal text-[#35356A]">مصادر حديثة</p>
            </div>
            <div className="flex gap-[10px]">
              <Image src={img2} alt="logo" width={25} height={25} />
              <p className="text-[20px] font-normal text-[#35356A]">مركز تدريبات اونلاين</p>
            </div>
            <div className="flex gap-[10px]">
              <Image src={img2} alt="logo" width={25} height={25} />
              <p className="text-[20px] font-normal text-[#35356A]">مجتمع لمساعدتك في المشاكل</p>
            </div>
            <div className="flex gap-[10px]">
              <Image src={img2} alt="logo" width={25} height={25} />
              <p className="text-[20px] font-normal text-[#35356A]">دعم فني من المدربين</p>
            </div>
          </div>
             <Link href="" className="text-right"> <Button className="w-fit ml-auto text-white bg-[#283A90] hover:bg-[#2c48d5] cursor-pointer">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.75 16.676L3.75 5.42603C3.75 5.22711 3.82902 5.03635 3.96967 4.89569C4.11032 4.75504 4.30109 4.67603 4.5 4.67603L15.75 4.67602C16.1642 4.67602 16.5 5.01181 16.5 5.42602C16.5 5.84024 16.1642 6.17602 15.75 6.17602L6.31066 6.17603L20.0303 19.8957C20.3232 20.1886 20.3232 20.6635 20.0303 20.9564C19.7374 21.2492 19.2626 21.2492 18.9697 20.9564L5.25 7.23669L5.25 16.676C5.25 17.0902 4.91421 17.426 4.5 17.426C4.08579 17.426 3.75 17.0902 3.75 16.676Z"
              fill="white"
            />
          </svg>

          <p>تعرف اكثر علينا</p>
        </Button></Link>
        </div>
      </div>
    </div>
  );
}

export default WhyUS;
