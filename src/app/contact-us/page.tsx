import { ProfileForm } from "@/components/Form";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import React from "react";
import img1 from "@/assets/MapPoint.png";
import img2 from "@/assets/email1.png";
import img3 from "@/assets/Phone.png";
import OurBranches from "@/components/OurBranches";
function page() {
  return (
    <div className="bg-[#F9F9FC] container-apply py-[50px]">
      <SectionHeader
        title="تواصل معنا عبر البريد"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, ullam!"
      />
      <div className="grid lg:grid-cols-2 items-center gap-[30px] mb-[50px]">
        <div className="space-y-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[17px]">
            <div
              dir="rtl"
              className="text-center flex flex-col items-center gap-4 p-[30px_10px] bg-white rounded-[15px]"
            >
              <div className="w-[90px] h-[90px] rounded-[15px] flex justify-center items-center bg-gradient-to-br from-[#283A90] via-[#3d4ea41c] to-[#283A9000]">
                <Image src={img1} alt="location logo" width={28} height={35} />
              </div>
              <p className="text-xl text-[#283A90] font-normal">اللوكيشن</p>
              <p className="text-[#999EB2] md:text-[12px] lg:text-[16px]">
                The Greek Campus - Dieux
              </p>
            </div>
            <div
              dir="rtl"
              className="text-center flex flex-col items-center gap-4 p-[30px_10px] bg-white rounded-[15px]"
            >
              <div className="w-[90px] h-[90px] rounded-[15px] flex justify-center items-center bg-gradient-to-br from-[#283A90] via-[#3d4ea41c] to-[#283A9000]">
                <Image src={img2} alt="location logo" width={28} height={35} />
              </div>
              <p className="text-xl text-[#283A90] font-normal">
                عنوان البريدي
              </p>
              <p className="text-[#999EB2] md:text-[12px] lg:text-[16px]">
                support@Dieux.com
              </p>
            </div>
            <div
              dir="rtl"
              className="text-center flex flex-col items-center gap-4 p-[30px_10px] bg-white rounded-[15px]"
            >
              <div className="w-[90px] h-[90px] rounded-[15px] flex justify-center items-center bg-gradient-to-br from-[#283A90] via-[#3d4ea41c] to-[#283A9000]">
                <Image src={img3} alt="location logo" width={28} height={35} />
              </div>
              <p className="text-xl text-[#283A90] font-normal">خط الاتصال</p>
              <p className="text-[#999EB2] md:text-[12px] lg:text-[16px]">
                +201025576136
              </p>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.350038032816!2d31.466281!3d30.034239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145838eaa48cfc3f%3A0x6f93e0f63a38a02d!2z2KfZhNmF2YjZh9ivINin2YTYp9mE2YXYp9mE2YTZitip!5e0!3m2!1sar!2seg!4v1697900000000!5m2!1sar!2seg"
              width="600"
              height="450"
              className="w-full h-[300px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <ProfileForm />
      </div>
      <SectionHeader
        title="فروعنا"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, ullam!"
      />
      <div className="grid md:grid-cols-2 gap-[17px]">
         <OurBranches />
         <OurBranches />
         <OurBranches />
         <OurBranches />
         <OurBranches />
         <OurBranches />
      </div>
     
    </div>
  );
}

export default page;
