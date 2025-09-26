import Image from "next/image";
import React from "react";
import img1 from "@/assets/details.png";
import { ProductDetail } from "@/types";
interface OneProdDetailsProps {
  details: ProductDetail[];
}
function OneProdDetails({ details }: OneProdDetailsProps) {
  console.log(details);
  return (
    <div>
      <header className="flex items-center gap-[20px] mb-[20px]">
        <div className="w-[62px] h-[62px] flex justify-center items-center bg-[#F9F9FC] rounded-[10px]">
          <Image src={img1} alt="details image" width={28} height={28} />
        </div>
        <h2 className="text-[#35356A] text-[24px] font-semibold">
          تفاصيل المنتج
        </h2>
      </header>
      <div className="flex flex-col gap-[20px]">
        {details?.map((det) => (
          <div
            className="grid grid-cols-2 lg:grid-cols-3 gap-[10px]"
            key={det.key}
          >
            <p className="p-[10px] lg:col-span-1 border rounded-[10px] bg-[#EBEBEB] text-center">
              {det.key}
            </p>
            <p className="p-[10px] lg:col-span-2 border rounded-[10px] flex items-center">
              {det.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OneProdDetails;
