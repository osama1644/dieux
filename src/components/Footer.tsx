import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import Group from "@/assets/Group.png";
import Link from "next/link";
function Footer() {
  return (
    <div className="container-apply bg-white">
      <div className="bg-[#F9F9FC] px-[15px] md:px-[100px] py-[50px] grid lg:grid-cols-2 gap-[100px] text-center md:text-right border-b-2 ">
        {/* first box */}
        <div className="grid md:grid-cols-2 gap-[100px]" dir="rtl">
          <div>
            <h2 className="text-[#35356A] text-[25px] mb-[20px]">
              روابط الموقع
            </h2>
            <div className="flex flex-col gap-[10px] *:text-[#999EB2]">
              <Link href="">
                {" "}
                <p>الرئيسيه</p>
              </Link>
              <Link href="/about">
                <p>عنا</p>
              </Link>
              <p>خدماتنا </p>
              <Link href="contact-us">
                <p>تواصل معنا</p>
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-[#35356A] text-[25px] mb-[20px]">
              خدمات المنصة
            </h2>
            <div className="flex flex-col gap-[10px] *:text-[#999EB2]">
              <p>تدريب الاشخاص علي</p>
              <p>كورسات اونلاين</p>
              <p>معسكرات التدريب</p>
            </div>
          </div>
        </div>
        {/* second box */}
        <div className="flex flex-col gap-[30px]" dir="rtl">
          <div className="flex items-center gap-1 justify-center md:justify-start">
            <Image
              src={logo}
              alt="logo img"
              width={54}
              height={54}
              className="rounded-[15px]"
            />
            <p className="text-[#35356A] text-lg font-semibold">ديوكس</p>
          </div>
          <p>
            هدفنا هو مساعدتك في الحصول علي افضل التدريبات المتخصصة في أمن
            المعلومات من خبراء امنين علي اعلي مستوي في جميع مجالات أمن المعلومات
          </p>
          <p>تابعنا</p>
          <div className="flex justify-center md:justify-start gap-[5px] md:gap-[15px] *:w-[48px] h-[48px] *:bg-white *:flex *:justify-center *:items-center *:rounded-[15px]">
            <Link href="https://facebook.com" target="_blank">
              <FaFacebookF className="text-[#35356A] w-[20px] h-[20px]" />
            </Link>
            <Link href="https://telegram.org" target="_blank">
              <RiTelegram2Fill className="text-[#35356A] w-[20px] h-[20px]" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedinIn className="text-[#35356A] w-[20px] h-[20px]" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FaTwitter className="text-[#35356A] w-[20px] h-[20px]" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram className="text-[#35356A] w-[20px] h-[20px]" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center bg-[#F9F9FC] py-[30px]">
        <h2 className="text-[#35356A] font-normal" dir="rtl">
          © جميع الحقوق محفوظة، Dieux.com
        </h2>
        <div className="flex justify-center items-center gap-2 *:text-[#999EB2] *:font-normal *:text-[12px] md:text-[18px]">
          <p>سياسه الخصوصيه</p>
          <Link href="contact-us">
            <p>تواصل معنا</p>
          </Link>
          <Link href="terms-of-service">
            <p>الشروط والاحكام</p>
          </Link>
        </div>
        <Image src={Group} alt="group logo" width={125} height={25} />
      </div>
    </div>
  );
}

export default Footer;
