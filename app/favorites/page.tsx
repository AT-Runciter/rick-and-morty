"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { Grid } from "react-loader-spinner";
import { useFavorites } from "@/store/store";
import { fetchMultiplyCharacters } from "@/services/api";
import CharacterCardList from "@/components/Planet/CharacterCardList";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Error from "@/components/GeneralComponents/Error";
import Favorites from "../../public/favorites.png";

export default function FavoritesPage() {
  const favoriteCharactersIds = useFavorites((state) => state.favorites);
  const [filter, setFilter] = useState("");
  const [planets, setPlanets] = useState<string[] | []>([]);

  const {
    isLoading,
    isError,
    data: characters,
  } = useQuery({
    queryKey: ["characters", favoriteCharactersIds],
    queryFn: () => fetchMultiplyCharacters(favoriteCharactersIds.join()),
  });

  useEffect(() => {
    if (characters?.length) {
      const uniquePlanets: string[] = [
        ...new Set(characters?.map(({ origin }) => origin.name)),
      ];
      setPlanets(uniquePlanets);
    }
  }, [characters]);

  return (
    <section className="pt-[125px] pb-[185px] w-[1240px] mx-auto">
      <div className="w-[508px] mx-auto">
        <Image src={Favorites} alt="favorites" priority sizes="508" />
      </div>
      {isLoading ? (
        <div className="pt-[115px] flex justify-center">
          <Grid color="#87F54E" />
        </div>
      ) : favoriteCharactersIds?.length ? (
        <>
          {planets.length && (
            <div className="w-[280px] mt-[50px] mx-auto">
              <Select onValueChange={(value) => setFilter(value)}>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Search by Planet" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {planets?.map((planet) => (
                    <SelectItem key={planet} value={planet}>
                      {planet}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {isError && <Error>Something went wrong...</Error>}

          {isLoading && (
            <div className="pt-[115px] flex justify-center">
              <Grid color="#87F54E" />
            </div>
          )}

          {characters && (
            <CharacterCardList characters={characters} filter={filter} />
          )}
        </>
      ) : (
        <div className="text-center text-2xl text-accent my-[100px]">
          There are no favorite characters yet
        </div>
      )}
    </section>
  );
}
