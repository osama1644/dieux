"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

function Nav() {
  const [currIndex, setCurrIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/about", label: "من نحن" },
    { href: "/boxes", label: "البوكسات" },
    { href: "/products", label: "المنتجات" },
    { href: "/blogs", label: "مقالات" },
  ];
  return (
    <nav className=" px-2 md:px-10 lg:container-apply py-[15px] flex items-center justify-between">
      <div className="flex gap-2 md:gap-5 items-center">
        <Button className="bg-secondary text-white hover:bg-[#283990c6] !h-auto transition cursor-pointer rounded-[10px] !px-2 !py-3  md:!px-4 md:!py-4 text-[12px] md:text-[16px] font-semibold ">
          تواصل معنا
          <FaWhatsapp className="md:!w-[25px] md:!h-[25px] !w-[15px] !h-[15px]" />
        </Button>
        <Button className="text-[#35356A] bg-[#F9F9FC] hover:bg-[#f9f9fccb] transition cursor-pointer font-semibold rounded-[10px] text-[12px] md:text-[16px] !px-2 !py-3  md:!px-4 md:!py-4 !h-auto">
          العربيه
          <TbWorld className="md:!w-[25px] md:!h-[25px] !w-[15px] !h-[15px]" />
        </Button>
      </div>
      <div className="flex gap-5 lg:gap-[49px] items-center">
        {isOpen ? (
          <IoCloseSharp
            className="block md:hidden text-2xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <RxHamburgerMenu
            className=" block md:hidden text-2xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}

        <ul
          className={` ${
            isOpen ? "block" : "hidden"
          } md:flex flex items-center gap-5 lg:gap-5 flex-col md:flex-row absolute md:relative top-15 md:top-0 md:right-0 right-20 bg-[#F9F9FC] rounded md:bg-white shadow-2xl md:shadow-0 w-[50%] md:w-auto `}
          dir="rtl"
        >
          {navLinks.map((link, i) => (
            <li key={i} onClick={() => setCurrIndex(i)}>
              <Link
                href={link.href}
                className={`${
                  currIndex === i ? "text-[#35356A]" : "text-[#35356AB3]"
                } font-medium`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-0.5 md:gap-1.25 ">
          <Link href="/" className="text-secondary font-semibold">
            ديوكس
          </Link>
          <Image
            src={logoImg}
            alt="logo"
            width={54}
            height={54}
            className="rounded"
          />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
