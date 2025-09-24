import React from "react";
import TermsBody from "./TermsBody";

function page() {
  return (
    <div className="container-apply py-[50px]">
      <header className="text-center space-y-[20px] p-[50px]">
        <h2 className="text-xl md:text-2xl lg:text-[48px] text-[#35356A] font-normal">
          شروط الاستخدام
        </h2>
        <p className="text-[#999EB2] text-lg font-normal">
          شروط الاستخدام الخاصه بنا
        </p>
      </header>
      <TermsBody />
    </div>
  );
}

export default page;
