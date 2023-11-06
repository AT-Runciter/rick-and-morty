"use client";
import { useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { Grid } from "react-loader-spinner";
import { fetchPlanets } from "@/services/api";
import PlanetList from "@/components/Home/PlanetList";
import { Button } from "@/components/ui/button";
import SpaceShip from "../public/spaceship.png";
import Error from "@/components/GeneralComponents/Error";

export default function HomePage() {
  const [page, setPage] = useState(1);
  const {
    isLoading,
    isError,
    data: planets,
  } = useQuery({
    queryKey: ["planets", page],
    queryFn: () => fetchPlanets(page),
    keepPreviousData: true,
  });

  return (
    <section className="pt-[105px] pb-[215px]">
      <div className="w-[520px] mx-auto mb-[80px]">
        <Image src={SpaceShip} alt="spaceship" priority sizes="520" />
      </div>
      {isLoading && (
        <div className="pt-[115px] flex justify-center">
          <Grid color="#87F54E" />
        </div>
      )}
      {isError && <Error>Something went wrong...</Error>}
      {planets && (
        <>
          <h1 className="text-center text-4xl text-accent mb-[60px]">
            Planets
          </h1>
          <div>
            <PlanetList planetsList={planets?.results} />
            <div className="flex justify-center gap-[30px] w-[1200px] mx-auto mt-[60px]">
              {page > 1 ? (
                <Button
                  onClick={() => setPage((prev) => prev - 1)}
                  className="text-xl text-secondary px-[45px] py-[30px] bg-gradient-to-b from-blue-300 to-green-300 transition-color hover:bg-gradient-to-t "
                >
                  Prev
                </Button>
              ) : (
                <div className="w-[138px]"></div>
              )}
              {page < planets?.info.pages ? (
                <Button
                  onClick={() => setPage((prev) => prev + 1)}
                  className="text-xl text-secondary px-[45px] py-[30px] bg-gradient-to-b from-blue-300 to-green-300 transition-color hover:bg-gradient-to-t "
                >
                  Next
                </Button>
              ) : (
                <div className="w-[138px]"></div>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
