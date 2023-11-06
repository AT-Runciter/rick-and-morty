"use client";
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Grid } from "react-loader-spinner";
import { fetchOnePlanet, fetchMultiplyCharacters } from "@/services/api";
import Error from "@/components/GeneralComponents/Error";
import PlanetCard from "@/components/Planet/PlanetCard";
import CharacterCardList from "@/components/Planet/CharacterCardList";

export default function PlanetPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const [residentsIds, setResidentsIds] = useState("");

  const {
    isLoading: isLoadingPlanets,
    isError: isErrorPlanets,
    data: planet,
  } = useQuery({
    queryKey: ["planet", residentsIds],
    queryFn: () => fetchOnePlanet(id),
  });

  const {
    isLoading: isLoadingCharacters,
    isError: isErrorCharacters,
    data: characters,
  } = useQuery({
    queryKey: ["characters", residentsIds],
    queryFn: () => fetchMultiplyCharacters(residentsIds),
  });

  useEffect(() => {
    const characterIds: string =
      planet?.residents
        .map((resident) => resident.slice(42, resident.length))
        .join() || "";
    setResidentsIds(characterIds);
  }, [planet]);

  return (
    <section className="pt-[145px] pb-[146px] w-[1240px] mx-auto">
      {(isErrorPlanets || isErrorCharacters) && (
        <Error>Something went wrong...</Error>
      )}
      {planet && (
        <>
          <PlanetCard planet={planet} />
          {(isLoadingPlanets || isLoadingCharacters) && (
            <div className="pt-[115px] flex justify-center">
              <Grid color="#87F54E" />
            </div>
          )}
          {characters && <CharacterCardList characters={characters} />}
        </>
      )}
    </section>
  );
}
