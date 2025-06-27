import { create } from "zustand";
import { Movie } from "@/src/entities/movie/model/types";

interface FavoritesState {
  favorites: Movie[];
  add: (movie: Movie) => void;
  remove: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  favorites: [],
  add: (movie) =>
    set((state) => ({
      favorites: [...state.favorites, movie],
    })),
  remove: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((m) => m.id !== id),
    })),
  isFavorite: (id) => get().favorites.some((m) => m.id === id),
}));
