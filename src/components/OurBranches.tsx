import Image from "next/image";
import React from "react";
import img1 from "@/assets/MapPoint.png"
import { IoIosArrowBack } from "react-icons/io";

function OurBranches() {
  return (
    <div>
      <div className="p-[30px] bg-white border rounded-[15px] relative ">
        <IoIosArrowBack className=" absolute top-1/2 -translate-y-1/2 left-4 w-[24px] h-[24px] text-[#6C7278]" />
        <div className="flex items-center gap-[15px] justify-end">
          <div dir="rtl">
            <p className="text-[20px] text-[#141522]">اللوكيشن التاني علي الخريطه</p>
            <p className="text-[18px] text-[#9F9F9F]">فرع مدينة نصر: الحي العاشر، مدينة نصر، القاهرة، مصر.</p>
          </div>
          <div className="w-[90px] h-[90px] flex justify-center items-center bg-[#F8F9FA] rounded-[15px] border"><Image src={img1} alt="location logo" width={28} height={35} /></div>
        </div>
      </div>
    </div>
  );
}

export default OurBranches;
