import Link from "next/link";
import React from "react";

type Props = {
  planet: Planet;
};

export default function PlanetItem({ planet }: Props) {
  const { id, name } = planet;
  return (
    <li>
      <Link
        href={`/planet/${id}`}
        className="flex items-center justify-center w-[250px] min-h-[132px] p-[10px] rounded-lg bg-accent text-secondary text-center hover:bg-gradient-to-t from-green-500 to-green-300 transition-color"
      >
        {name}
      </Link>
    </li>
  );
}
