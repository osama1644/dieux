import React from "react";
import ProductInfo from "../ProductInfo";
import img1 from "@/assets/blogImg.png"
import Image from "next/image";
import TermsBody from "@/app/terms-of-service/TermsBody";
function page() {
  return (
    <div className="container-apply">
      <div className="grid lg:grid-cols-8 gap-[20px]">
        <div className="lg:col-span-3  ">
          <ProductInfo />
        </div>
        <div className="lg:col-span-5 grid gap-[50px]">
          <Image src={img1} alt="product img" width={400} height={200} className="w-full h-full" />
          <TermsBody />
        </div>
      </div>
    </div>
  );
}

export default page;
