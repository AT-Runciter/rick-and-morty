import React from "react";
import Image from "next/image";
import Planet from "../../public/planet.png";

type Props = {
  planet: Planet;
};

export default function PlanetCard({ planet }: Props) {
  const { name, dimension, created, type } = planet;

  return (
    <div className="flex gap-[120px]">
      <div className="w-[507px] h-[507px] -ml-[120px] rounded-[10px]">
        <Image
          src={Planet}
          alt="planet"
          width={507}
          height={507}
          className="object-contain"
        />
      </div>
      <div>
        <p className="text-4xl font-bold text-accent">Planet:</p>
        <p className="text-4xl ml-[36px]">- {name}</p>
        <p className="text-4xl font-bold text-accent">Type:</p>
        <p className="text-4xl ml-[36px]">- {type}</p>
        <p className="text-4xl font-bold text-accent">Dimension:</p>
        <p className="text-4xl ml-[36px]">- {dimension}</p>
        <p className="text-4xl font-bold text-accent">Created:</p>
        <p className="text-4xl ml-[36px]">- {created}</p>
      </div>
    </div>
  );
}
