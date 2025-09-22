import React from "react";
import img1 from "@/assets/homeProductImage.png";
import Image from "next/image";
import { Button } from "./ui/button";
const prod = [
  {
    id: 1,
    img: img1,
    title: "🏅 العناية بالغسيل ",
    subtitle: "مساحيق الغسيل، المنعمات، عطور الغسيل، منعم الأقمشة، والمزيد.",
  },
  {
    id: 2,
    img: img1,
    title: "🏅 العناية بالغسيل ",
    subtitle: "مساحيق الغسيل، المنعمات، عطور الغسيل، منعم الأقمشة، والمزيد.",
  },
  {
    id: 3,
    img: img1,
    title: "🏅 العناية بالغسيل ",
    subtitle: "مساحيق الغسيل، المنعمات، عطور الغسيل، منعم الأقمشة، والمزيد.",
  },
];
function HomePageProducts() {
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[20px]  mx-auto px-4 lg:w-auto lg:max-w-[1430px] w-[400px] md:w-auto md:max-w-[900px] mb-[50px]">
        {
          prod.map(prod=> (
            <div key={prod.id} className="rounded-[16px] overflow-hidden relative shadow-2xl">
              <Image src={prod.img} alt={prod.subtitle} width={300} height={300} className="w-full h-full" />
              <div className="p-5 rounded-[20px_20px_0_0] absolute bg-white bottom-0 w-[90%]   left-1/2 -translate-x-1/2">
                <div className=" flex flex-col items-center gap-3">
                  <h2 className="text-[#35356A] text-[20px] font-semibold">{prod.title}</h2>
                  <p className="text-center text-[#999EB2] font-normal">{prod.subtitle}</p>
                  <Button className="bg-[#283A90] hover:bg-[#283990ca] !cursor-pointer w-full">عرض المنتجات الموجودة</Button>
                </div>
              </div>
              <div className=" absolute top-1 right-2 bg-[#FFFFFF] rounded-[10px] p-[10px] text-[#283A90] font-normal" dir="rtl">20 منتج موجود</div>
            </div>
          ))
        }
      </div>
      <Button className="!py-[19px] h-auto px-6 bg-[white] text-[#283A90] border-1 border-[#283A90] mx-auto block hover:bg-[#e6dadaec] cursor-pointer mb-[30px]">عرض المزيد</Button>
    </div>
  );
}

export default HomePageProducts;
