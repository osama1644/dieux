import React from "react";
import SectionHeader from "./SectionHeader";
import { ProfileForm } from "./Form";
import Info from "./Info";

function ContactUs() {
  return (
    <div className="container-apply">
      <SectionHeader
        title="تواصل معنا عبر البريد"
        subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt."
      />
      <div>
        <ProfileForm />
        <Info />
      </div>
    </div>
  );
}

export default ContactUs;
