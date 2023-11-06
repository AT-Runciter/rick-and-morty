import React from "react";
import Image from "next/image";
import Planet from "../../public/planet-small.png";

type Props = {
  character: Character;
};

export default function CharacterInfo({ character }: Props) {
  const { image, name, status, species, type, gender, origin } = character;
  return (
    <div className="relative flex gap-[40px] justify-center items-end w-[960px] p-[40px] mx-auto bg-white rounded-[20px]">
      <Image
        src={Planet}
        alt="planet"
        width={275}
        height={275}
        className="absolute top-[-100px] right-[-100px] object-contain"
      />
      <div className="border-2 border-black rounded-[20px]">
        <Image
          src={image}
          alt="avatar"
          width={463}
          height={463}
          className=" object-contain rounded-[18px]"
        />
      </div>
      <div>
        <div className="min-w-[304px] p-[30px] text-secondary bg-accent border-2 border-black rounded-[20px]">
          <p className="text-3xl mb-[30px]">{name}</p>
          <div>
            <p className="text-xl font-bold">Status:</p>
            <p className="text-lg ml-[24px]">{status}</p>
            <p className="text-xl font-bold">Species:</p>
            <p className="text-lg ml-[24px]">{species}</p>
            <p className="text-xl font-bold">Type:</p>
            <p className="text-lg ml-[24px]">{type || "---"}</p>
            <p className="text-xl font-bold">Gender:</p>
            <p className="text-lg ml-[24px]">{gender}</p>
            <p className="text-xl font-bold">Origin:</p>
            <p className="text-lg ml-[24px]">{origin.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
