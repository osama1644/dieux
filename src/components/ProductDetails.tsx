"use client";
import React, {  useState } from "react";
import OneProdDetails from "./OneProdDetails";
import OneProdDescription from "./OneProdDescription";
import OneProdFiles from "./OneProdFiles";
import { ProductDetail } from "@/types";
interface OneProdDetailsProps {
  details: ProductDetail[];
  description:string
}
function ProductDetails({details,description}:OneProdDetailsProps) {
  console.log(description)
  const links = [
    { link: "details", lable: "تفاصيل المنتج" },
    { link: "description", lable: "وصف المنتج" },
    { link: "files", lable: "مرفقات" },
  ];
  const [tab, setTab] = useState("details");

  return (
    <div className="">
      <div className="flex justify-center gap-[20px]  p-x-[30px] rounded-[20px]">
        {links.map((link, i) => (
          <p
            key={i}
            className={`text-[#35356A] text-lg font-medium cursor-pointer py-[30px]  ${
              link.link === tab ? "border-b-2 border-b-[#35356A]" : ""
            }`}
            onClick={() => setTab(link.link)}
          >
            {link.lable}
          </p>
        ))}
      </div>
      <div className="border p-[30px] rounded-[20px]">
        <div className="border p-[30px] rounded-[20px]">
          {
            {
              details: <OneProdDetails details={details} />,
              description: <OneProdDescription description={description} />,
              files: <OneProdFiles />,
            }[tab]
          }
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
