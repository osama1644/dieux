"use client"
import { Button } from '@/components/ui/button'
import { useGetProductByCategory } from '@/lib/hooks'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import img2 from "@/assets/ClockCircle.png";

import React from 'react'
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ar";
dayjs.extend(relativeTime);
dayjs.locale("ar");

function formatRelativeTime(isoDate: string) {
  const fixedIso = isoDate.slice(0, 23);
  return dayjs(fixedIso).fromNow();
}
function Page() {
  const params =useParams<{id:string}>()
  const id =params.id
  console.log(id)
  const{data,isLoading,isError} =useGetProductByCategory(id)
  if(data){
    console.log(data)
    console.log((data.data[0].title).split(" ").slice(0,10).join(" "))
  }
  return (
    <div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-[20px] container-apply">
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
              <p className="text-[#999EB2] text-[18px]">{prod.title.split(" ").slice(0,10).join(" ")}...</p>
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
    </div>
  )
}

export default Page