import { Card, CardContent } from "@/src/shared/ui/card";
import Image from "next/image";
import { Movie } from "../model/types";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card>
      <CardContent className="p-2">
        {movie.poster_path && (
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={300}
            height={450}
            className="w-full h-auto rounded"
          />
        )}
        <h3 className="mt-2 font-semibold text-sm">{movie.title}</h3>
        <p className="text-xs text-gray-500">{movie.release_date}</p>
      </CardContent>
    </Card>
  );
}
