import Image from "next/image";
import React from "react";
import img1 from "@/assets/fiels.png";
import img2 from "@/assets/file2.png";
import { LuDownload } from "react-icons/lu";

function OneProdFiles() {
  return (
    <div>
      <header className="flex items-center gap-[20px] mb-[20px]">
        <div className="w-[62px] h-[62px] flex justify-center items-center bg-[#F9F9FC] rounded-[10px]">
          <Image src={img1} alt="details image" width={28} height={28} />
        </div>
        <h2 className="text-[#35356A] text-[24px] font-semibold">
          مرفقات المنتج
        </h2>
      </header>
      <div className="grid xl:grid-cols-2 gap-[10px]">
      <div className=" gap-[15px] relative border p-[16px] rounded-[10px] ">
     <div>
         <div className=" absolute top-1/2 -translate-y-1/2 left-[10px] bg-[#F9F9FC] p-[8px] rounded-[10px]">
        <LuDownload />
        </div>
        <div className="flex gap-[10px]">
          <div className="w-[62px] h-[62px] flex justify-center items-center bg-[#FE547C33] rounded-[10px]">
            <Image src={img2} alt="" width={22} height={22} />
          </div>
          <div className="flex-1">
            <p className="text-[#35356A] font-normal">ملف الحصه الاوله للتحميل. PDF</p>
            <p className="text-[#999EB2] font-normal">200 KB</p>
          </div>
        </div>
     </div>
      </div>
      <div className=" gap-[15px] relative border p-[16px] rounded-[10px] ">
     <div>
         <div className=" absolute top-1/2 -translate-y-1/2 left-[10px] bg-[#F9F9FC] p-[8px] rounded-[10px]">
        <LuDownload />
        </div>
        <div className="flex gap-[10px]">
          <div className="w-[62px] h-[62px] flex justify-center items-center bg-[#FE547C33] rounded-[10px]">
            <Image src={img2} alt="" width={22} height={22} />
          </div>
          <div className="flex-1">
            <p className="text-[#35356A] font-normal">ملف الحصه الاوله للتحميل. PDF</p>
            <p className="text-[#999EB2] font-normal">200 KB</p>
          </div>
        </div>
     </div>
      </div>
      <div className=" gap-[15px] relative border p-[16px] rounded-[10px] ">
     <div>
         <div className=" absolute top-1/2 -translate-y-1/2 left-[10px] bg-[#F9F9FC] p-[8px] rounded-[10px]">
        <LuDownload />
        </div>
        <div className="flex gap-[10px]">
          <div className="w-[62px] h-[62px] flex justify-center items-center bg-[#FE547C33] rounded-[10px]">
            <Image src={img2} alt="" width={22} height={22} />
          </div>
          <div className="flex-1">
            <p className="text-[#35356A] font-normal">ملف الحصه الاوله للتحميل. PDF</p>
            <p className="text-[#999EB2] font-normal">200 KB</p>
          </div>
        </div>
     </div>
      </div>
      <div className=" gap-[15px] relative border p-[16px] rounded-[10px] ">
     <div>
         <div className=" absolute top-1/2 -translate-y-1/2 left-[10px] bg-[#F9F9FC] p-[8px] rounded-[10px]">
        <LuDownload />
        </div>
        <div className="flex gap-[10px]">
          <div className="w-[62px] h-[62px] flex justify-center items-center bg-[#FE547C33] rounded-[10px]">
            <Image src={img2} alt="" width={22} height={22} />
          </div>
          <div className="flex-1">
            <p className="text-[#35356A] font-normal">ملف الحصه الاوله للتحميل. PDF</p>
            <p className="text-[#999EB2] font-normal">200 KB</p>
          </div>
        </div>
     </div>
      </div>
      <div className=" gap-[15px] relative border p-[16px] rounded-[10px] ">
     <div>
         <div className=" absolute top-1/2 -translate-y-1/2 left-[10px] bg-[#F9F9FC] p-[8px] rounded-[10px]">
        <LuDownload />
        </div>
        <div className="flex gap-[10px]">
          <div className="w-[62px] h-[62px] flex justify-center items-center bg-[#FE547C33] rounded-[10px]">
            <Image src={img2} alt="" width={22} height={22} />
          </div>
          <div className="flex-1">
            <p className="text-[#35356A] font-normal">ملف الحصه الاوله للتحميل. PDF</p>
            <p className="text-[#999EB2] font-normal">200 KB</p>
          </div>
        </div>
     </div>
      </div>

      </div>
    </div>
  );
}

export default OneProdFiles;
