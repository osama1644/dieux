import Image from "next/image";
import React from "react";
import img1 from "@/assets/StarsMinimalistic.png";
import img2 from "@/assets/persil.png";
import { Button } from "./ui/button";
import { ProfileForm } from "./Form";
import SectionHeader from "./SectionHeader";
import Info from "./Info";
import { useProducts } from "@/lib/hooks";
import Link from "next/link";
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

function RelatedProducts() {
  const { data, isError, isLoading } = useProducts();

  return (
    <div className="container-apply py-[100px] bg-[#F9F9FC] mt-[30px]" dir="rtl">
      <header className="flex justify-center items-center flex-col mb-[32px]" >
        <div className="">
          <Image src={img1} width={50} height={50} alt="" />
        </div>
        <h2 className="text-[#35356A] text-[36px] font-medium">
          منتجات اخري قد تعجبك
        </h2>
      </header>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-[20px] mb-[40px]">
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
              <p className="text-[#35356A] text-[20px] min-h-[60px]">{prod.subTitle}</p>
              <p className="text-[#999EB2] text-[18px] line-clamp-2">{prod.title}</p>
            </div>
            <div className="flex *:text-[#35356A] gap-[10px] *:bg-[#F5F5F7] *:rounded-[10px] *:p-[5px_10px]">
              {prod.attributes.slice(0, 3).map((attr) => (
                <p key={attr}>{attr}</p>
              ))}
              {prod.attributes.length > 3 && (
                <p className="text-[#35356A] bg-[#F5F5F7] rounded-[10px] p-[5px_10px]">
                  +{prod.attributes.slice(3).length}
                </p>
              )}
            </div>
            <Button className="text-white bg-[#283A90] hover:bg-[#283990c8] transition cursor-pointer mt-auto">
              <Link href={`/products/${prod.id}`}>عرض تفاصيل اكثر</Link>
            </Button>
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        className="border-[#283A90] text-[#283A90] block mx-auto w-[170px] bg-[#F9F9FC] cursor-pointer"
      >
        <Link href={`/products`}>عرض الكل</Link>
      </Button>
      <SectionHeader
        title="تواصل معنا عبر البريد"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, ullam!"
      />
      <div className="grid gap-[40px]">
        <ProfileForm />
        <Info />
      </div>
    </div>
  );
}

export default RelatedProducts;
