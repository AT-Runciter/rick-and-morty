import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoritesState {
  favorites: number[];
  addToFavorites: (id: number) => void;
  removeFromFavorites: (id: number) => void;
}

export const useFavorites = create<FavoritesState>()(
  persist(
    (set) => ({
      favorites: [],
      addToFavorites: (id) =>
        set((state) => ({ favorites: [...state.favorites, id] })),
      removeFromFavorites: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((favorite) => favorite !== id),
        })),
    }),

    {
      name: "favorites",
    }
  )
);
