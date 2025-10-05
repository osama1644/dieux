"use client"
import React from "react";
import SectionHeader from "./SectionHeader";
import img1 from "@/assets/blogImg.png"
import img2 from "@/assets/ClockCircle.png"
import Image from "next/image";
import { Button } from "./ui/button";
import { useBlogs } from "@/lib/hooks";
import Link from "next/link";
function Blogs() {
  const {data,isError,isLoading} = useBlogs()

  return (
    <div className=" container-apply">
      <SectionHeader
        title="احدث المقالات الخاصه بنا"
        subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt."
      />
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
          {data?.data.map((blog, i) => (
          <div
            key={blog.id}
            className="p-[25px] flex flex-col gap-[15px] border rounded-[10px]"
            dir="rtl"
          >
            <Image
              src={blog.image}
              alt="blog img"
              width={300}
              height={300}
              className="w-full h-[290px]"
            />
            <div className="flex gap-2 items-center">
              <Image src={img2} alt="clock logo" width={25} height={25} />
              <p className="text-[#999EB2]">{blog.time_ago}</p>
            </div>
            <div className="spac-y-[12px]">
              <p className="text-[#35356A] text-[20px] min-h-[60px] flex items-center ">
                {blog.title}
              </p>
              <p className="text-[#999EB2] text-[18px]">
                {blog.description.replace(/<[^>]+>/g, "").trim().split(" ").slice(0,10).join(" ")}...
              </p>
            </div>
            <div className="flex *:text-[#35356A] gap-[10px] *:bg-[#F5F5F7] *:rounded-[10px] *:p-[5px_10px]">
              {blog.tags.map((tag) => (
                <p key={tag}>{tag}</p>
              ))}
            </div>
            <Button className="text-white bg-[#283A90] hover:bg-[#283990c8] transition cursor-pointer mt-auto ">
              <Link href={`/blogs/${blog.id}`}>عرض تفاصيل اكثر</Link>
            </Button>
          </div>
        ))}
     
      </div>
      <Button variant="outline" className=" w-[176px] !h-auto py-[19px] mx-auto block my-[50px] border-[#283A90] text-[#283A90] cursor-pointer text-[18px]"  ><Link href="/blogs">عرض الكل</Link></Button>
    </div>
  );
}

export default Blogs;
