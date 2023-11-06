import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../GeneralComponents/Navigation";
import Background from "../../public/background.png";
import Logo from "@/public/logo.png";

export default function Header() {
  return (
    <header
      style={{ backgroundImage: `url(${Background.src})` }}
      className="w-full h-[100px] fixed top-0 z-10 bg-repeat"
    >
      <div className="flex items-center w-10/12 mx-auto">
        <div className="w-96">
          <Link href="/">
            <Image src={Logo} alt="logo" priority sizes="460" />
          </Link>
        </div>
        <Navigation
          navStyles="flex gap-14 ml-auto text-accent text-2xl"
          linkStyles="hover:text-green-500 transition-color"
        />
      </div>
    </header>
  );
}
