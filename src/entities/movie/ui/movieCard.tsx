import Image from "next/image";
import { Movie } from "../model/types";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {movie.poster_path && (
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={300}
          height={450}
          className="w-full h-auto rounded"
        />
      )}
      <div className="px-4 py-2 flex flex-col gap-2">
        <h2 className="font-semibold text-lg line-clamp-2">{movie.title}</h2>
        <p> {new Date(movie.release_date).getFullYear()}</p>
        <p className="text-sm line-clamp-3">{movie.overview}</p>
      </div>
    </div>
  );
}
