import React from "react";
import PlanetItem from "./PlanetItem";

type Props = {
  planetsList: Planet[];
};

export default function PlanetList({ planetsList }: Props) {
  return (
    <ul className="flex gap-[66px] flex-wrap w-[1200px] mx-auto text-2xl">
      {planetsList.map((planet) => (
        <PlanetItem key={planet.id} planet={planet} />
      ))}
    </ul>
  );
}
