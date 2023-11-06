"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Grid } from "react-loader-spinner";
import { fetchOneCharacter } from "@/services/api";
import CharacterInfo from "@/components/Character/CharacterInfo";
import Error from "@/components/GeneralComponents/Error";

export default function CharacterPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const {
    isLoading,
    isError,
    data: character,
  } = useQuery({
    queryKey: ["character"],
    queryFn: () => fetchOneCharacter(id),
  });

  return (
    <section className="pt-[185px] pb-[185px] w-[1240px] mx-auto">
      {isLoading && (
        <div className="pt-[115px] flex justify-center">
          <Grid color="#87F54E" />
        </div>
      )}
      {isError && <Error>Something went wrong...</Error>}
      {character && <CharacterInfo character={character} />}
    </section>
  );
}
