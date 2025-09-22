import React from "react";
import SectionHeader from "./SectionHeader";
import FaqsAccorians from "./FaqsAccorians";

function Faqs() {
  return (
    <div className=" container-apply bg-[#F9F9FC] pb-[50px]" dir="rtl">
      <SectionHeader
        title="الاسئله الشائعه"
        subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt."
      />
      <FaqsAccorians />
    </div>
  );
}

export default Faqs;
