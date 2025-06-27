import { Movie } from "@/src/entities/movie/model/types";
import Image from "next/image";
import { Badge } from "@/src/shared/ui/badge";

interface Props {
  movie: Movie;
}

export function MovieDetails({ movie }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="relative aspect-[2/3] w-full rounded overflow-hidden">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">
            {new Date(movie.release_date).getFullYear()}
          </Badge>

          {movie.genres?.map((genre) => (
            <Badge key={genre.id} variant="outline">
              {genre.name}
            </Badge>
          ))}
        </div>
        <p className="text-gray-700">{movie.overview}</p>
        <p>⭐ {movie.vote_average} / 10</p>
        {/* add genres, runtime, etc if needed */}
      </div>
    </div>
  );
}
