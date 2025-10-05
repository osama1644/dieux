import React from "react";
import heroImg from "@/assets/heroImg.jpg"
import vector from "@/assets/Vector.png"
import Image from "next/image";
import { FaStar } from "react-icons/fa";

function Hero() {
  return (
    <div className="flex flex-col items-center bg-[#F9F9FC] pt-12 gap-[60px] pb-[60px]" dir="rtl">
      <div className="max-w-[1240px] flex flex-col gap-5">
        <p className=" text-[#7F41FF] text-[20px]  text-center">
          اهلا بك في ديوكس 👋
        </p>
        <h1 className=" text-[20px] sm:text-[30px] md:text-[40px] lg:text-[53px] max-w-[990px] font-semibold text-center text-[#35356A]">
          أناقة صممناها من أجلك.! <br />
          تكتمل بها هوية مطبخك وأسلوب حياتك
        </h1>
        <p className=" text-[#35356A] text-[20px]  text-center">ديوكس .. اختيارك الأول والأفضل</p>
        <div className="flex gap-[10px] md:gap-[20px] lg:gap-[60px]  justify-center *:flex *:justify-center *:flex-col *:items-center" dir="ltr">
          <div>
            <h2 className=" text-[16px] sm:text-[30px] lg:text-[40px] text-[#35356A] font-bold">+300</h2>
            <p className="text-[#35356A] text-center text-[14px] md:text-[16px]">تخصص موجوده</p>
          </div>
          <div>
            <h2 className=" text-[16px] sm:text-[30px] lg:text-[40px] text-[#35356A] font-bold">+1500</h2>
            <p className="text-[#35356A] text-center text-[14px] md:text-[16px]">كليات موجوده</p>
          </div>
          <div>
            <h2 className=" text-[16px] sm:text-[30px] lg:text-[40px] text-[#35356A] font-bold">+70</h2>
            <p className="text-[#35356A] text-center text-[14px] md:text-[16px]">جامعات موجوده</p>
          </div>
          <div>
            <h2 className=" text-[16px] sm:text-[30px] lg:text-[40px] text-[#35356A] font-bold">+100k</h2>
            <p className="text-[#35356A] text-center text-[14px] md:text-[16px]">طلاب موجوده</p>
          </div>
        </div>
      </div>
      <div className=" w-[90%] sm:w-[600px] md:w-[720px] lg:w-[1000px] xl:w-[1240px]  relative">
        <Image src={heroImg} alt="image for my product" width={1300} height={560} className="w-full h-[300px] md:h-[560px] rounded-3xl" />
        <div className="bg-[#CDCDCD] w-[100px] h-[100px] flex justify-center items-center rounded-full border-8 bo-[#CDCDCD80] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image src={vector} alt="vector" width={20} height={20} className="w-[40px] h-[40px]" />
        </div>
      </div>
      <div className="w-[90%] sm:w-[600px] md:w-[720px] lg:w-[1000px] xl:w-[1240px] max-w-[1240px] bg-[#283A901A] py-[60px] flex flex-col items-center rounded-[40px] px-[30px]">
        <div className="flex gap-2 ">
          <FaStar className="w-[20px] h-[20px] md:w-[30px] md:h-[30px ]lg:w-[38px]  lg:h-[38px]  text-[#283A9066]" />
          <FaStar className="w-[25px] h-[25px] md:w-[40px] md:h-[40px ] lg:w-[48px]  lg:h-[48px]  text-[#283A90B3]" />
          <FaStar className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px]  lg:h-[50px]  text-[#283A90]"  />
          <FaStar className="w-[25px] h-[25px] md:w-[40px] md:h-[40px] lg:w-[48px]  lg:h-[48px]  text-[#283A90B3]" />
          <FaStar className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[38px]  lg:h-[38px]  text-[#283A9066]" />
        </div>
        <h2 className="text-[#35356A] xs:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[62px] font-medium text-center">المسحوق رقم 1# في الوطن العربي</h2>
      </div>
    </div>
  );
}

export default Hero;
