"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import img1 from "@/assets/noon.png";
import img2 from "@/assets/amazon.png";
import ProductInfo from "@/app/blogs/ProductInfo";
import img3 from "@/assets/blogImg.png";
import img4 from "@/assets/heroImg.jpg";
import cup from "@/assets/CupFirst.png";
import ProductDetails from "@/components/ProductDetails";
import RelatedProducts from "@/components/RelatedProducts";
function Page() {
  const [mainImage, setMainImg] = useState(img3);
  return (
  <>
    <div className="container-apply grid lg:grid-cols-8 gap-[20px]">
      <div className="lg:col-span-3 p-[20px] border flex flex-col gap-[20px] rounded-[20px] ">
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <p className="text-[#999EB2] text-[14px] font-normal">
              4,5 ( 500 تقيم )
            </p>
            <FaStar className="text-[#FFBB54]" />
          </div>
          <p
            dir="rtl"
            className=" text-lg lg:text-[30px] text-[#283A90] font-normal"
          >
            708 جنيه مصري
          </p>
        </div>
        <div className="bg-[#F5F5F7] rounded-[15px] flex flex-col gap-[15px] p-[15px]">
          <p className="text-[#999EB2] text-center">روابط شراء المنتج</p>
          <div className="flex justify-center gap-[10px] flex-col sm:flex-row ">
            <Button className="!h-[52px] px-[10px] lg:p-[15px_20px] rounded-[100px] bg-[#F4DF08] hover:bg-[#f4e008a8] text-[#383B42]">
              <Image
                src={img1}
                alt="noon logo"
                width={24}
                height={24}
                className=" w-[15px] h-[15px] lg:w-[24px] lg:h-[24px]"
              />
              <p>رابط المنتج نون</p>
            </Button>
            <Button className="!h-[52px] px-[10px] lg:p-[15px_20px] rounded-[100px] bg-[#FF9900] hover:bg-[#FF9900AC] text-white">
              <Image src={img2} alt="amazon logo" width={22} height={22} />
              <p>رابط المنتج امازون</p>
            </Button>
          </div>
          <Button className="bg-[#35356A] text-white !h-[52px] rounded-[100px]">
            موقع اخر لجوجل
          </Button>
        </div>
        <ProductInfo />
      </div>
      <div className="lg:col-span-5">
        <div className="grid grid-cols-6 gap-2">
          <Image
            src={mainImage}
            alt=""
            width={400}
            height={300}
            className="w-full h-[500px] col-span-5"
          />
          <div className="col-span-1 flex flex-col gap-2 h-[500px] overflow-y-scroll">
            {[img3, img4, img3, img4, img3, img4].map((img, i) => (
              <Image
                key={i}
                src={img}
                alt=""
                width={400}
                height={300}
                className="w-full min-h-[100px] "
                onClick={() => setMainImg(img)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[20px] mt-[50px]" dir="rtl">
          <p className="text-[#35356A] tect-[20px] lg:text-[30px] font-medium">
            بخاخ تنظيف المطبخ سيترو 3 اكس باور عالي التركيز من ديوكس | مزيل شحوم
            مطبخ قوي لجميع الاغراض للطبخ والشحوم لاي سطح، 1 لتر
          </p>
          <p className="text-[18px] text-[#35356A] font-normal">
            تتزايد حاجة المجتمع للتطبيقات التي يمكنها تسهيل الأنشطة اليومية مع
            تقدم التكنولوجيا. تبحث العديد من الشركات حاليًا عن مطورين حتى
            يتمكنوا من بيع المنتجات (السلع أو الخدمات) التي يمكنها الوصول إلى
            مشترين أوسع عبر الإنترنت.
          </p>
          <div className="grid lg:grid-cols-2 gap-[20px]">
            <div className="flex items-center gap-3 border rounded-[10px] p-[15px]" dir="rtl">
              <Image src={cup} width={24} height={24} alt="achievement" />
              <div className="space-y-2">
                <p className="text-[#35356A] font-normal">تصنيع كميات خصيصا لك باعلي جوده</p>
                <p className="text-[#999EB2] ">تصنيع كميات خصيصا لك باعلي جوده في اي وقت</p>
              </div>
            </div>
            <div className="flex items-center gap-3 border rounded-[10px] p-[15px]" dir="rtl">
              <Image src={cup} width={24} height={24} alt="achievement" />
              <div className="space-y-2">
                <p className="text-[#35356A] font-normal">يمكنك الاستفسار ( 01011653271 )</p>
                <p className="text-[#999EB2] ">في اي وقت عي الواتس اب معانا</p>
              </div>
            </div>
            <div className="flex items-center gap-3 border rounded-[10px] p-[15px]" dir="rtl">
              <Image src={cup} width={24} height={24} alt="achievement" />
              <div className="space-y-2">
                <p className="text-[#35356A] font-normal">منتجات بمواصفات عالميه</p>
                <p className="text-[#999EB2] ">منتجات بمواصفات عالميه صنع خصيصا لك</p>
              </div>
            </div>
            <div className="flex items-center gap-3 border rounded-[10px] p-[15px]" dir="rtl">
              <Image src={cup} width={24} height={24} alt="achievement" />
              <div className="space-y-2">
                <p className="text-[#35356A] font-normal">يسمح بالإرجاع.</p>
                <p className="text-[#999EB2] ">في خلال 15 يوم من التسليم مقابل بقيمة 60 ج.م.</p>
              </div>
            </div>
          </div>
          <div className="mb-[40px]">
            <ProductDetails />
          </div>
        </div>
      </div>
    </div>
      <div><RelatedProducts /></div>
  </>
  );
}

export default Page;
