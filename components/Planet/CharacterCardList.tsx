import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

type Props = {
  characters: Character[];
  filter?: string;
};

export default function CharacterCardList({ characters, filter = "" }: Props) {
  const [shownCharacters, setShownCharacters] = useState<Character[] | []>([]);

  useEffect(() => {
    if (filter === "") {
      setShownCharacters(characters);
      return;
    }

    setShownCharacters(
      characters?.filter((character) => character.origin.name === filter)
    );
  }, [filter, characters]);

  return (
    <>
      <ul className="flex flex-wrap gap-x-[20px] gap-y-[60px] items-center mx-auto mt-[70px]">
        {Array.isArray(shownCharacters)
          ? shownCharacters.map((character) => (
              <li key={character.id}>
                <CharacterCard character={character} />
              </li>
            ))
          : shownCharacters && (
              <li>
                <CharacterCard character={shownCharacters} />
              </li>
            )}
      </ul>
    </>
  );
}
