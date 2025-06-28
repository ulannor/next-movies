"use client";

import { Heart } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { Movie } from "@/entities/movie/model/types";
import { useFavoritesStore } from "@/shared/store/favorites";

interface LikeButtonProps {
  movie: Movie;
  className?: string;
}

export function LikeButton({ movie, className }: LikeButtonProps) {
  const { add, remove, isFavorite } = useFavoritesStore();
  const liked = isFavorite(movie.id);

  const toggleFavorite = () => {
    if (liked) {
      remove(movie.id);
    } else {
      add(movie);
    }
  };

  return (
    <Button
      onClick={toggleFavorite}
      className={className}
      variant="secondary"
      size="icon"
    >
      <Heart className={`size-5 ${liked ? "text-red-500" : ""}`} />
    </Button>
  );
}
