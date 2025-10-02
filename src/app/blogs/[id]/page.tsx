"use client";
import React from "react";
import ProductInfo from "../ProductInfo";
import img1 from "@/assets/blogImg.png";
import Image from "next/image";
import TermsBody from "@/app/terms-of-service/TermsBody";
import { notFound, useParams } from "next/navigation";

import { useOneBlog } from "@/lib/hooks";
function Page() {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const { data, isLoading, isError } = useOneBlog(id);
  if (data) {
    console.log(data);
  }
  if (isError || (!isLoading && !data?.data)) {
    notFound();
  }
  return (
    <div className="container-apply">
      <div className="grid lg:grid-cols-8 gap-[20px]">
        <div className="lg:col-span-3  ">
          <ProductInfo tags={data?.data.tags || []} />
        </div>
        <div className="lg:col-span-5 grid gap-[50px]">
          <Image
            src={data?.data.image || img1}
            alt="product img"
            width={400}
            height={200}
            className="w-full h-full"
          />

          <TermsBody />
        </div>
      </div>
    </div>
  );
}

export default Page;
