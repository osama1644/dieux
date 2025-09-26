import React from "react";
import { GoFileDirectory } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
interface Tags {
  tags?:string[]
}
function ProductInfo({tags}:Tags) {
  console.log(tags)
  return (
    <div className="grid gap-[18px] rounded-[20px] border p-[20px]">
      <div className="p-[20px] rounded-[20px] border text-[#999EB2]">
        <div className="flex items-center justify-end gap-2 mb-[15px]">
          <p>كاتوجري</p>
          <GoFileDirectory className="w-[20px] h-[20px]" />
        </div>
        <div className="flex flex-wrap *:basis-[70px] *:grow gap-[10px] *:flex *:justify-center *:items-center">
          {
            tags?.map(tag=>(
              
              <p key={tag} className="p-[7px_12px] rounded-[10px] border">{tag}</p>
            ))
          }

        </div>
      </div>
      <div className="bg-[#F9F9FC] p-[10px] rounded-[10px]">
        <ul className="grid gap-[10px]">
          <li className="flex gap-1 items-center justify-end ">
            <p className="text-[#999EB2] font-IBM">
              فهم أساسيات النموذج الأولي والرسوم المتحركة
            </p>
            <FaCheckCircle className="text-[#35356A] w-[20px] h-[20px]" />
          </li>
          <li className="flex gap-1 items-center justify-end ">
            <p className="text-[#999EB2] font-IBM">
              فهم أساسيات MicroInteraction
            </p>
            <FaCheckCircle className="text-[#35356A] w-[20px] h-[20px]" />
          </li>
          <li className="flex gap-1 items-center justify-end ">
            <p className="text-[#999EB2] font-IBM">
              إنشاء الرسوم المتحركة (20 دراسة حالة) لتطبيقات الهاتف
            </p>
            <FaCheckCircle className="text-[#35356A] w-[20px] h-[20px]" />
          </li>
          <li className="flex gap-1 items-center justify-end ">
            <p className="text-[#999EB2] font-IBM">
              تقديم التصاميم باستخدام الرسوم المتحركة
            </p>
            <FaCheckCircle className="text-[#35356A] w-[20px] h-[20px]" />
          </li>
        </ul>
      </div>
      <Button variant="outline" className="rounded-[100px] cursor-pointer">
        <FaLink className="text-[#35356A]" />
        <p className="text-[#35356A] font-IBM ">مشاركه الافادة</p>
      </Button>
      <Button className="bg-[#283A90] rounded-[100px] cursor-pointer">
        <p className="font-IBM">تواصل معنا</p>
        <FaWhatsapp className="w-[21px] h-[21px]" />
      </Button>
    </div>
  );
}

export default ProductInfo;
