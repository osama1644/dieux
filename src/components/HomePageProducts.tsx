"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useQuery } from "@tanstack/react-query";
import { getBoxes } from "@/api/api";
import { CategoriesResponse } from "@/types";
function HomePageProducts() {
  const [numberOfCategories,setNumberOfCategories]=useState<number>(3)
  const {data,error,isLoading,isError}= useQuery<CategoriesResponse>({
    queryKey:["categories"],
    queryFn:getBoxes
  })

 console.log(data)
  return (
    <div className="mt-[100px] py-5 mb-[65px]">
      <div className="flex flex-col items-center gap-5 mb-[60px]">
        <h2 className="text-[48px] text-[#35356A] text-center">
          بوكسات ديوكسا
        </h2>
        <p className="text-[20px] text-[#999EB2] font-normal text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, ullam!
        </p>
      </div>
      {isLoading && (
        <div className="text-center">
          <p className="text-[#35356A] font-medium text-[30px]">loading products .... </p>
        </div>
      )}
      {
        isError && (
          <div className="text-center">
            <p>Error : {error.message}</p>
          </div>
        )
      }
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[20px]  mx-auto px-4 lg:w-auto lg:max-w-[1430px] w-[400px] md:w-auto md:max-w-[900px] mb-[50px]">
        {
          data?.data.slice(0,numberOfCategories).map((cat)=>(
            <div key={cat.id} className="rounded-[16px] overflow-hidden relative shadow-2xl">
              <Image src={cat.image} alt={cat.description} width={300} height={300} className="w-full h-full" />
              <div className="p-5 rounded-[20px_20px_0_0] absolute bg-white bottom-0 w-[90%]   left-1/2 -translate-x-1/2">
                <div className=" flex flex-col items-center gap-3">
                  <h2 className="text-[#35356A] text-[20px] font-semibold">{cat.name}</h2>
                  <p className="text-center text-[#999EB2] font-normal">{cat.description}</p>
                  <Button className="bg-[#283A90] hover:bg-[#283990ca] !cursor-pointer w-full">عرض المنتجات الموجودة</Button>
                </div>
              </div>
              <div className=" absolute top-1 right-2 bg-[#FFFFFF] rounded-[10px] p-[10px] text-[#283A90] font-normal" dir="rtl">20 منتج موجود</div>
            </div>
          ))
         
        }
      </div>
      <Button className="!py-[19px] h-auto px-6 bg-[white] text-[#283A90] border-1 border-[#283A90] mx-auto block hover:bg-[#e6dadaec] cursor-pointer mb-[30px]" onClick={()=>setNumberOfCategories(5)}>عرض المزيد</Button>
    </div>
  );
}

export default HomePageProducts;
