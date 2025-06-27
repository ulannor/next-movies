import Image from "next/image";
import { Movie } from "../model/types";
import Link from "next/link";
import { useFavoritesStore } from "@/src/shared/store/favorites";
import { Heart } from "lucide-react";
import { Button } from "@/src/shared/ui/button";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const { add, remove, isFavorite } = useFavoritesStore();
  const liked = isFavorite(movie.id);

  return (
    <div className="relative h-full">
      <Button
        onClick={() => (liked ? remove(movie.id) : add(movie))}
        className="absolute top-2 right-2 z-10 py-2"
        variant={"secondary"}
      >
        <Heart className={`size-6 ${liked ? "text-red-500" : ""}`} />
      </Button>

      <Link href={`/movie/${movie.id}`}>
        <div className="border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
          {movie.poster_path && (
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={300}
              height={450}
              className="w-full h-auto rounded"
            />
          )}
          <div className="px-4 py-2 flex flex-col gap-1">
            <h2 className="font-semibold text-lg line-clamp-2">
              {movie.title}
            </h2>
            <p className="text-sm text-gray-500">
              {new Date(movie.release_date).getFullYear()}
            </p>
            <p className="text-sm line-clamp-3">{movie.overview}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
