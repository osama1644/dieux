"use client";
import SectionHeader from "@/components/SectionHeader";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import img2 from "@/assets/ClockCircle.png";
import { CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import PaginationComp from "@/components/PaginationComp";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/api/api";
import { ProductsResponse } from "@/types";

//time convertion
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ar";
dayjs.extend(relativeTime);
dayjs.locale("ar");

function formatRelativeTime(isoDate: string) {
  const fixedIso = isoDate.slice(0, 23);
  return dayjs(fixedIso).fromNow();
}

const links = [
  { label: "الكل", href: "/boxes" },
  { label: "الاكثر طلبا", href: "/boxes" },
  { label: "عنايه بالبشره", href: "/boxes" },
  { label: "منتجات طبيعيه", href: "/boxes" },
];
function Boxes() {
  const { data, isLoading, isError } = useQuery<ProductsResponse>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  if (data) {
    console.log(data);
  }
  const [currCategory, setCurrCategory] = useState(0);

  return (
    <div className="container-apply">
      <SectionHeader
        title="بوكسات ديوكسا"
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
      <div
        dir="rtl"
        className="flex justify-center items-center *:p-[10px] *:text-center *:text-[12px] *:lg:p-[12px_30px] *:rounded-[15px]  *:lg:rounded-[30px] gap-[5px] lg:gap-[13px] mb-[25px]"
      >
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
      {/* grid for products */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-[20px]">
        {isLoading && (
          <div className="flex text-center">
            <p>loading products from server</p>
          </div>
        )}
        {isError && (
          <div className="flex text-center">
            <p className=" text-red-500">cant get your products</p>
          </div>
        )}
        {data?.data.map((prod) => (
          <div
            key={prod.id}
            className="p-[25px] flex flex-col gap-[15px] border rounded-[10px]"
            dir="rtl"
          >
            <Image
              src={prod.main_image}
              alt="blog img"
              width={300}
              height={300}
              className="w-full h-[290px]"
            />
            <div className="flex gap-2 items-center">
              <Image src={img2} alt="clock logo" width={25} height={25} />
              <p className="text-[#999EB2]">
                {formatRelativeTime(prod.created_at)}
              </p>
            </div>
            <div className="spac-y-[12px]">
              <p className="text-[#35356A] text-[20px]">{prod.subTitle}</p>
              <p className="text-[#999EB2] text-[18px]">{prod.title}</p>
            </div>
            <div className="flex *:text-[#35356A] gap-[10px] *:bg-[#F5F5F7] *:rounded-[10px] *:p-[5px_10px]">
              {prod.attributes.slice(0, 3).map((attr) => (
                <p key={attr}>{attr}</p>
              ))}
              <p className="text-[#35356A] bg-[#F5F5F7] rounded-[10px] p-[5px_10px]">
                +{prod.attributes.slice(3).length}
              </p>
            </div>
            <Button className="text-white bg-[#283A90] hover:bg-[#283990c8] transition cursor-pointer">
              <Link href={`/products/${prod.id}`}>عرض تفاصيل اكثر</Link>
            </Button>
          </div>
        ))}
      </div>
      <PaginationComp />
    </div>
  );
}

export default Boxes;
