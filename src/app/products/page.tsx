"use client";
import SectionHeader from "@/components/SectionHeader";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useMemo } from "react";
import img2 from "@/assets/ClockCircle.png";
import { CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import PaginationComp from "@/components/PaginationComp";
import { useProducts, useSearch } from "@/lib/hooks";

//time convertion
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ar";
import { searchAll } from "@/api/api";
dayjs.extend(relativeTime);
dayjs.locale("ar");
function formatRelativeTime(isoDate: string) {
  const fixedIso = isoDate.slice(0, 23);
  return dayjs(fixedIso).fromNow();
}


const links = [
  { label: "الكل", value: "all" },
  { label: "الاكثر طلبا", value: "most" },
  { label: "عنايه بالبشره", value: "care" },
  { label: "منتجات طبيعيه", value: "natural" },
];
// export async function searchAll(query: string) {
//   try {
//     const res = await axios.get(`https://api.dieuxeg.com/api/search`, {
//       params: { q: query }, 
//     });
//     return res.data;
//   } catch {
//     throw new Error("Failed to search");
//   }
// }

function Boxes() {
  const { data, isLoading, isError } = useProducts();
  const [currCategory, setCurrCategory] = useState("all");
  const [query,setQuery] =useState("")
  const thedata =useSearch(query)
  if(thedata.data){
    console.log(thedata.data)
  }

  const filteredProducts = useMemo(() => {
    if (!data?.data) return [];

    switch (currCategory) {
      case "all":
      case "most": 
        return data.data;
      case "care":
        return data.data.length > 0 ? [data.data[0]] : [];
      case "natural":
        return data.data.length > 0 ? [data.data[1]] : [];
      default:
        return data.data;
    }
  }, [data, currCategory]);

  // بعد ال states
const items = useMemo(() => {
  if (thedata.data) {
    // لو جاي من search api
    return thedata.data.products || [];
  }
  // fallback للفلترة القديمة
  return filteredProducts;
}, [thedata, filteredProducts]);

  return (
    <div className="container-apply">
      <SectionHeader
        title="منتجات ديوكسا"
        subtitle="استعدي لإضافة لمسة ساحرة الى بيتك ف لا مكان مثل البيت"
      />

      {/* Search */}
      <div className="p-[20px] rounded-[20px] border w-[90%] mx-auto relative mb-[30px]">
        <CiSearch className=" absolute top-1/2 -translate-y-1/2 right-6" />
        <Input
          type="search"
          className="bg-[#F9F9FC] px-6 placeholder:text-[#999EB2]"
          placeholder="بحث عن"
          dir="rtl"
          onChange={(e)=>setQuery(e.target.value)}
        />
      </div>

      {/* Tabs */}
      <div
        dir="rtl"
        className="flex justify-center items-center *:p-[10px] *:text-center *:text-[12px] *:lg:p-[12px_30px] *:rounded-[15px]  *:lg:rounded-[30px] gap-[5px] lg:gap-[13px] mb-[25px]"
      >
        {links.map((link, i) => (
          <button
            key={i}
            className={`${
              currCategory === link.value
                ? "bg-[#35356A] text-white"
                : "bg-[#F5F5F7] text-[#35356A]"
            } cursor-pointer`}
            onClick={() => setCurrCategory(link.value)}
          >
            {link.label}
          </button>
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

        {items.map((prod) => (
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
              </p>
            </div>
            <div className="spac-y-[12px]">
              <p className="text-[#35356A] text-[20px]">{prod.subTitle}</p>
              <p className="text-[#999EB2] text-[18px]">{prod.title}</p>
            </div>
            <div className="flex *:text-[#35356A] gap-[10px] *:bg-[#F5F5F7] *:rounded-[10px] *:p-[5px_10px]">
              
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
