import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import heroimg from "@/assets/heroImg.jpg"
import Image from "next/image";
function About() {
  return (
    <div className=" px-[30px] lg:container-apply bg-[#F9F9FC] py-[100px] grid lg:grid-cols-2 gap-[30px] ">
      <div className="flex flex-col gap-8">
        <p className="text-[#283A90] border-1 border-[#283A90] w-fit py-1 px-6 rounded-[80px] ml-auto">
          نبذه عنا
        </p>
        <h2 dir="rtl" className=" text-[20px] md:text-[30px] lg:text-[35px] font-medium text-[#35356A]">
          سفير الجامعات: من Noureldine for Universities إلى مرجعك الموثوق في
          التعليم العالي
        </h2>
        <p className="text-right text-[#999EB2] text-[21px]">
          نقدم لك المعلومات الموثوقة لنكون شركاء في تحقيق أحلامك المستقبلية.
          ترقبوا المفاجآت والتحديثات المثيرة قريباً!
        </p>
        <div className="flex justify-end items-center gap-[20px]">
          <div className="">
            <h2
              className="font-bold text-[30px] capitalize text-[#35356A] text-right"
              
            >
              +7 y
            </h2>
            <p className="text-[#999EB2] font-medium text-[18px]" dir="rtl">
              خبره في المجال
            </p>
          </div>
          <div dir="rtl">
            <h2
              className="font-bold text-[30px] capitalize text-[#35356A] text-right"
              dir="ltr"
            >
              +10 k
            </h2>
            <p className="text-[#999EB2] font-medium text-[18px]">
              استشارة عن الجامعات
            </p>
          </div>
          <div dir="rtl">
            <h2
              className="font-bold text-[30px] capitalize text-[#35356A] text-right"
              dir="ltr"
            >
              +100 k
            </h2>
            <p className="text-[#999EB2] font-medium text-[18px]">
              مستفيد من خدمتنا
            </p>
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
      <div>
        <Image src={heroimg} alt="img for my product" width={300} height={300} className="w-full h-full rounded-[35px]" />
      </div>
    </div>
  );
}

export default About;
