import React from "react";
import SectionHeader from "./SectionHeader";
import img1 from "@/assets/Plain.png";
import img2 from "@/assets/plain2.png";
import img3 from "@/assets/plain3.png";
import Image from "next/image";
function Achievements() {
  return (
    <div className="  container-apply  mb-[80px] ">
      <SectionHeader
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
        title="انجازات ديوكس"
      />
      <div className="mt-[100px]  bg-[#283A90] grid lg:grid-cols-3 px-[56px] py-[20px] lg:py-0 md:grid-cols-2 rounded-2xl gap-[20px]  ">
        <div className="py-[30px] bg-white  shadow-2xl relative lg:bottom-[76px] flex flex-col gap-[20px] items-center rounded-2xl">
          <div className="w-[109px] h-[109px] bg-gradient-to-br from-[#283A90] via-[#3d4ea41c] to-[#283A9000] flex justify-center items-center rounded-2xl ">
            {" "}
            <Image src={img1} alt="achievement" width={61} height={61} />
          </div>
          <p className="text-[#283A90] text-3xl font-normal">1200</p>
          <p className="text-[#283A90]  font-normal">استشارة اونلاين</p>
        </div>
        <div className="py-[30px] bg-white  shadow-2xl relative lg:bottom-[76px] flex flex-col gap-[20px] items-center rounded-2xl">
          <div className="w-[109px] h-[109px] bg-gradient-to-br from-[#283A90] via-[#3d4ea41c] to-[#283A9000] flex justify-center items-center rounded-2xl ">
            {" "}
            <Image src={img2} alt="achievement" width={61} height={61} />
          </div>
          <p className="text-[#283A90] text-3xl font-normal">25,600</p>
          <p className="text-[#283A90]  font-normal">متدرب</p>
        </div>
        <div className="py-[30px] bg-white  shadow-2xl relative lg:bottom-[76px] md:left-1/2 lg:left-0  flex flex-col gap-[20px] items-center rounded-2xl">
          <div className="w-[109px] h-[109px] bg-gradient-to-br from-[#283A90] via-[#3d4ea41c] to-[#283A9000] flex justify-center items-center rounded-2xl ">
            {" "}
            <Image src={img3} alt="achievement" width={61} height={61} />
          </div>
          <p className="text-[#283A90] text-3xl font-normal">1,500</p>
          <p className="text-[#283A90]  font-normal">شركة مدربة</p>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
