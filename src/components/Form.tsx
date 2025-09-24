"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import userImg from "@/assets/User.png";
import phoneImg  from "@/assets/Phone.png";
import emailImg  from "@/assets/email1.png";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "البريد الالكتروني غير صالح",
  }),
});

function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values);
}

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-[16px] "
      >
        <div className="grid md:grid-cols-2 gap-[15px] items-center">
          <div className=" relative">
            <Image
              src={phoneImg}
              alt="user image"
              width={35}
              height={35}
              className=" absolute right-2 top-1/2 -translate-y-1/2"
            />
            <Input
              dir="rtl"
              placeholder="رقم الهاتف"
              className="bg-[#F5F5F7] px-12 !h-auto py-[25px]"
            />
          </div>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem dir="rtl">
                {/* <FormLabel>Username</FormLabel> */}
                <FormControl>
                  <div className="relative ">
                    <Image
                      src={userImg}
                      alt="user image"
                      width={35}
                      height={35}
                      className=" absolute right-2 top-1/2 -translate-y-1/2"
                    />
                    <Input
                      placeholder="اسمك بالكامل"
                      {...field}
                      className="bg-[#F5F5F7] px-12 !h-auto py-[25px]"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
           <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem dir="rtl">
                {/* <FormLabel>Username</FormLabel> */}
                <FormControl>
                  <div className="relative ">
                    <Image
                      src={emailImg}
                      alt="user image"
                      width={35}
                      height={35}
                      className=" absolute right-2 top-1/2 -translate-y-1/2"
                    />
                    <Input
                      placeholder="الايميل الخاص بك"
                      {...field}
                      className="bg-[#F5F5F7] px-12 !h-auto py-[25px]"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
         <div className=" relative">
           <Image
                      src={emailImg}
                      alt="user image"
                      width={35}
                      height={35}
                      className=" absolute right-2 top-4 "
                    />
           <Textarea placeholder="الرساله الخاصه بك" dir="rtl" className="bg-[#F5F5F7]  px-12  py-[25px] !h-[295px]"/>
         </div>

        <div dir="rtl" className=" flex flex-col md:flex-row  gap-[20px]">
          <Button type="submit" className="bg-[#283A90] text-white w-ful md:w-[180px] lg:w-[250px]">تواصل معنا</Button>
          <Button variant="outline" className="  text-[#35356A] w-full md:w-[120px] lg:w-[150px]">الغاء</Button>
        </div>
      </form>
    </Form>
  );
}
