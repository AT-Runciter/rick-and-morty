import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useFavorites } from "@/store/store";
import { Star } from "../icons";

type Props = {
  character: Character;
};

export default function CharacterCard({ character }: Props) {
  const { id, image, name, status } = character;
  const addToFavorites = useFavorites((state) => state.addToFavorites);
  const removeFromFavorites = useFavorites(
    (state) => state.removeFromFavorites
  );
  const favorites = useFavorites((state) => state.favorites);
  const [isInFavorites, setIsInFavorites] = useState(favorites.includes(id));

  const onFavoritesClick = () => {
    isInFavorites ? removeFromFavorites(id) : addToFavorites(id);
    setIsInFavorites((state) => !state);
  };

  return (
    <div className="relative w-[290px] min-h-[484px] bg-accent rounded-[10px] hover:scale-[1.02] transition-transform">
      <div className="w-full h-[290px] rounded-[10px]">
        <button
          className={`absolute top-[10px] left-[10px] `}
          onClick={onFavoritesClick}
        >
          <Star
            color={isInFavorites ? "rgb(135, 245, 78)" : "rgb(255, 255, 255"}
          />
        </button>
        <Image
          src={image}
          alt="avatar"
          width={311}
          height={438}
          className=" object-contain rounded-[10px]"
        />
      </div>
      <Link
        href={`/character/${id}`}
        className="absolute top-[225px] right-[10px] inline-block w-[94px] h-[94px] rounded-full bg-secondary text-accent text-4xl shadow border-4 border-accent text-center py-[16px] hover:bg-gradient-to-b from-gray-700 to-green-700 transition-color"
      >
        Go
      </Link>
      <div className="text-secondary text-2xl p-[16px]">
        <p className="font-bold">Name:</p>
        <p>{name}</p>
        <p className="font-bold">Status:</p>
        <p>{status}</p>
      </div>
    </div>
  );
}
