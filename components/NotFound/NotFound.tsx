import React from "react";
import Image from "next/image";
import Link from "next/link";
import Picle from "../../public/picle-rick.png";

export default function NotFoundComponent() {
  return (
    <section className="pt-[115px] pb-[201px]">
      <h1 className="w-[698px] pt-[62px] mx-auto text-[104px] font-bold text-center">
        Error 404
      </h1>
      <div className="flex items-center w-[1065px] mx-auto">
        <p className="w-[796px] text-[64px] font-semibold leading-tight">
          Don’t worry my friend, not an alien penis... Flip the pickle.
        </p>
        <div className="w-[259px]">
          <Link href="/">
            <Image src={Picle} alt="photo" sizes="259" />
          </Link>
        </div>
      </div>
    </section>
  );
}
