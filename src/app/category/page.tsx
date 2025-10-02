"use client"
import SectionHeader from '@/components/SectionHeader'
import { Button } from '@/components/ui/button'
import { useBoxes } from '@/lib/hooks'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Page() {
    const { data, error, isLoading, isError } = useBoxes()
  
  return (
    <div className='container-apply'>
       <SectionHeader
        title="بوكسات ديوكسا"
        subtitle="استعدي لإضافة لمسة ساحرة الى بيتك ف لا مكان مثل البيت"
      />
            {isLoading && (
        <div className="text-center">
          <p className="text-[#35356A] font-medium text-[30px]">
            loading products ....{" "}
          </p>
        </div>
      )}
      {isError && (
        <div className="text-center">
          <p>Error : {error.message}</p>
        </div>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[20px]  mx-auto px-4 lg:w-auto lg:max-w-[1430px] w-[400px] md:w-auto md:max-w-[900px] mb-[50px]">
        {data?.data?.map((cat) => (
          <div
            key={cat.id}
            className="rounded-[16px] overflow-hidden relative shadow-2xl"
          >
            <Image
              src={cat.image}
              alt={cat.description}
              width={300}
              height={300}
              className="w-full h-full"
            />
            <div className="p-5 rounded-[20px_20px_0_0] absolute bg-white bottom-0 w-[90%]   left-1/2 -translate-x-1/2">
              <div className=" flex flex-col items-center gap-3">
                <h2 className="text-[#35356A] text-[20px] font-semibold">
                  {cat.name}
                </h2>
                <p className="text-center text-[#999EB2] font-normal">
                  {cat.description}
                </p>
                <Button className="bg-[#283A90] hover:bg-[#283990ca] !cursor-pointer w-full">
                   <Link href={`/category/${cat.id}`}>عرض المنتجات الموجوده</Link></Button>
       
              </div>
            </div>
            <div
              className=" absolute top-1 right-2 bg-[#FFFFFF] rounded-[10px] p-[10px] text-[#283A90] font-normal"
              dir="rtl"
            >
              {cat.product_count} موجود
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page