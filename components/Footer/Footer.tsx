import React from "react";
import Link from "next/link";
import Navigation from "../GeneralComponents/Navigation";
import { Logo } from "../icons";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full h-[106px] bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="flex items-center w-10/12 h-full mx-auto">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex items-center ml-20 border-l-2 h-5/6 border-gray-400">
          <Navigation
            navStyles="flex gap-14 ml-24 text-gray-400 text-xl"
            linkStyles="hover:text-gray-200 transition-color"
          />
        </div>
      </div>
    </footer>
  );
}
