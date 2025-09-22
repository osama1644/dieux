import React from "react";
import SectionHeader from "./SectionHeader";
import Services from "./Services";

function ServicesPage() {
  return (
    <div className="bg-[#F9F9FC]">
      <SectionHeader
        subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do"
        title="خدماتنا وما الزي نقدمه"
      />
    <Services />
    </div>
  );
}

export default ServicesPage;
