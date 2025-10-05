"use client";
import SectionHeader from "@/components/SectionHeader";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { CiSearch } from "react-icons/ci";
import img1 from "@/assets/homeProductImage.png";
import img2 from "@/assets/ClockCircle.png";
import { Button } from "@/components/ui/button";
import PaginationComp from "@/components/PaginationComp";

import { useBlogs } from "@/lib/hooks";
const links = [
  { label: "مسحوق", value: "powder" },
  { label: "غسيل", value: "wash" },
  { label: "منظفات", value: "clean" },
  { label: "الكل", value: "all" },
];

function Page() {
  const { data, isError, isLoading } = useBlogs()
  if (data) {
    console.log(data);
  }
  const [currCategory, setCurrCategory] = useState("all");
  
    const filteredProducts = useMemo(() => {
      if (!data?.data) return [];
  
      switch (currCategory) {
        case "all":
        case "most": 
          return data.data;
        case "wash":
          return data.data.length > 0 ? [data.data[0]] : [];
        case "clean":
          return data.data.length > 0 ? [data.data[1]] : [];
        case "powder":
          return data.data.length > 0 ? [data.data[2]] : [];
        default:
          return data.data;
      }
    }, [data, currCategory]);
  return (
    <div className="container-apply mb-[30px] pt-[100px]">
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
          <button
            key={i}
            className={`${
              currCategory === link.value
                ? "bg-[#35356A] text-white"
                : "bg-[#F5F5F7] text-[#35356A]"
            }`}
            onClick={() => setCurrCategory(link.value)}
          >
            {link.label}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
        {filteredProducts.map((blog) => (
          <div
            key={blog.id}
            className="p-[25px] flex flex-col gap-[15px] border rounded-[10px]"
            dir="rtl"
          >
            <Image
              src={blog.image}
              alt="blog img"
              width={300}
              height={300}
              className="w-full h-[290px]"
            />
            <div className="flex gap-2 items-center">
              <Image src={img2} alt="clock logo" width={25} height={25} />
              <p className="text-[#999EB2]">{blog.time_ago}</p>
            </div>
            <div className="spac-y-[12px]">
              <p className="text-[#35356A] text-[20px] min-h-[60px] flex items-center ">
                {blog.title}
              </p>
              <p className="text-[#999EB2] text-[18px]">
                {blog.description.replace(/<[^>]+>/g, "").trim().split(" ").slice(0,10).join(" ")}...
              </p>
            </div>
            <div className="flex *:text-[#35356A] gap-[10px] *:bg-[#F5F5F7] *:rounded-[10px] *:p-[5px_10px]">
              {blog.tags.map((tag) => (
                <p key={tag}>{tag}</p>
              ))}
            </div>
            <Button className="text-white bg-[#283A90] hover:bg-[#283990c8] transition cursor-pointer mt-auto ">
              <Link href={`/blogs/${blog.id}`}>عرض تفاصيل اكثر</Link>
            </Button>
          </div>
        ))}
      </div>
      <PaginationComp />
    </div>
  );
}

export default Page;
