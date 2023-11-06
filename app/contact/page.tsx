import React from "react";
import Image from "next/image";
import AboutUs from "../../public/about.png";
import ContactForm from "@/components/Contact/ContactForm";

export default function ContactPage() {
  return (
    <section className="pt-[105px] pb-[146px]">
      <div className="w-[508px] mx-auto">
        <Image src={AboutUs} alt="about us" priority sizes="520" />
      </div>
      <p className="w-[870px] mx-auto mt-[30px] font-medium text-[20px] leading-tight">{`You're talking about Inception? Wubba lubba dub dub! This isn't Game of Thrones, Morty. Awwww thankss your preferences better that way. Plus, if you get in kind of a cool enough relationship, you can sort of follow each bies for 25 schmeckles!`}</p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`mailto:rickyandmortytravieso@gmail.com`}
        className="block w-[870px] mx-auto mt-[20px] font-medium text-[20px] text-center leading-normal text-accent hover:text-green-500 transition-color"
      >
        rickyandmortytravieso@gmail.com
      </a>

      <h1 className="text-center text-2xl text-accent mt-[30px]">Contact us</h1>
      <p className="w-[336px] text-center text-lg text-white mx-auto mt-[20px]">
        Leave us your contact information and we will contact you
      </p>
      <ContactForm />
    </section>
  );
}
