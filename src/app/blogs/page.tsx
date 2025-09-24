"use client";
import SectionHeader from "@/components/SectionHeader";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import img1 from "@/assets/homeProductImage.png";
import img2 from "@/assets/ClockCircle.png";
import { Button } from "@/components/ui/button";
import PaginationComp from "@/components/PaginationComp";
const links = [
  { label: "مسحوق", href: "/blogs" },
  { label: "غسيل", href: "/blogs" },
  { label: "منظفات", href: "/blogs" },
  { label: "الكل", href: "/blogs" },
];

function Page() {
  const [currCategory, setCurrCategory] = useState(3);
  return (
    <div className="container-apply mb-[30px]">
      <SectionHeader
        title="افضل المقالات الموجوده عندنا"
        subtitle="استعدي لإضافة لمسة ساحرة الى بيتك ف لا مكان مثل البيت"
      />
      <div className="p-[20px] rounded-[20px] border w-[90%] mx-auto relative mb-[30px]">
        <CiSearch className=" absolute top-1/2 -translate-y-1/2 right-6" />
        <Input
          type="search"
          className="bg-[#F9F9FC] px-6 placeholder:text-[#999EB2]"
          placeholder="بحث عن"
          dir="rtl"
        />
      </div>
      <div className="flex justify-center items-center *:p-[10px] *:text-center *:text-[12px] *:lg:p-[12px_30px] *:rounded-[15px]  *:lg:rounded-[30px] gap-[5px] lg:gap-[13px] mb-[25px]">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className={`${
              currCategory === i
                ? "bg-[#35356A] text-white"
                : "bg-[#F5F5F7] text-[#35356A]"
            }`}
            onClick={() => setCurrCategory(i)}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
        <div
          className="p-[25px] flex flex-col gap-[15px] border rounded-[10px]"
          dir="rtl"
        >
          <Image
            src={img1}
            alt="blog img"
            width={300}
            height={300}
            className="w-full h-[290px]"
          />
          <div className="flex gap-2 items-center">
            <Image src={img2} alt="clock logo" width={25} height={25} />
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
          className="p-[25px] flex flex-col gap-[15px] border rounded-[10px]"
          dir="rtl"
        >
          <Image
            src={img1}
            alt="blog img"
            width={300}
            height={300}
            className="w-full h-[290px]"
          />
          <div className="flex gap-2 items-center">
            <Image src={img2} alt="clock logo" width={25} height={25} />
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
          className="p-[25px] flex flex-col gap-[15px] border rounded-[10px]"
          dir="rtl"
        >
          <Image
            src={img1}
            alt="blog img"
            width={300}
            height={300}
            className="w-full h-[290px]"
          />
          <div className="flex gap-2 items-center">
            <Image src={img2} alt="clock logo" width={25} height={25} />
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
          className="p-[25px] flex flex-col gap-[15px] border rounded-[10px]"
          dir="rtl"
        >
          <Image
            src={img1}
            alt="blog img"
            width={300}
            height={300}
            className="w-full h-[290px]"
          />
          <div className="flex gap-2 items-center">
            <Image src={img2} alt="clock logo" width={25} height={25} />
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
          className="p-[25px] flex flex-col gap-[15px] border rounded-[10px]"
          dir="rtl"
        >
          <Image
            src={img1}
            alt="blog img"
            width={300}
            height={300}
            className="w-full h-[290px]"
          />
          <div className="flex gap-2 items-center">
            <Image src={img2} alt="clock logo" width={25} height={25} />
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
          className="p-[25px] flex flex-col gap-[15px] border rounded-[10px]"
          dir="rtl"
        >
          <Image
            src={img1}
            alt="blog img"
            width={300}
            height={300}
            className="w-full h-[290px]"
          />
          <div className="flex gap-2 items-center">
            <Image src={img2} alt="clock logo" width={25} height={25} />
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
          className="p-[25px] flex flex-col gap-[15px] border rounded-[10px]"
          dir="rtl"
        >
          <Image
            src={img1}
            alt="blog img"
            width={300}
            height={300}
            className="w-full h-[290px]"
          />
          <div className="flex gap-2 items-center">
            <Image src={img2} alt="clock logo" width={25} height={25} />
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
          className="p-[25px] flex flex-col gap-[15px] border rounded-[10px]"
          dir="rtl"
        >
          <Image
            src={img1}
            alt="blog img"
            width={300}
            height={300}
            className="w-full h-[290px]"
          />
          <div className="flex gap-2 items-center">
            <Image src={img2} alt="clock logo" width={25} height={25} />
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
          className="p-[25px] flex flex-col gap-[15px] border rounded-[10px]"
          dir="rtl"
        >
          <Image
            src={img1}
            alt="blog img"
            width={300}
            height={300}
            className="w-full h-[290px]"
          />
          <div className="flex gap-2 items-center">
            <Image src={img2} alt="clock logo" width={25} height={25} />
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
      <PaginationComp />
    </div>
  );
}

export default Page;
