import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Blogs from "@/components/Blogs";
import ContactUs from "@/components/ContactUs";
import Faqs from "@/components/Faqs";
import Hero from "@/components/Hero";
import HomePageProducts from "@/components/HomePageProducts";
import ServicesPage from "@/components/ServicesPage";
import Sponsers from "@/components/Sponsers";
import Testimonials from "@/components/Testimonials";
import WhyUS from "@/components/WhyUS";

export default function Home() {
  return (
    <>
      <Hero />
      <Sponsers />
      <HomePageProducts />
      <About />
      <Achievements />
      <ServicesPage />
      <Testimonials />
      <WhyUS />
      <Blogs />
      <Faqs />
      <ContactUs />

    </>
  );
}
