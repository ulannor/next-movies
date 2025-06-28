import { Movie } from "@/src/entities/movie/model/types";
import { CastMember } from "@/src/entities/movie/api/fetchMovieCast";
import Image from "next/image";
import { Badge } from "@/src/shared/ui/badge";
import { LikeButton } from "@/src/features/favorites/ui/LikeButton";

interface Props {
  movie: Movie;
  cast: CastMember[];
}

export function MovieDetails({ movie, cast }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="relative aspect-[2/3] w-full rounded overflow-hidden">
        <div className="absolute top-2 right-4 z-10 py-2">
          <LikeButton movie={movie}/>
        </div>

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

        <div className="space-y-2 pt-4">
          <h2 className="font-semibold text-lg">Top Cast</h2>
          <ul className="space-y-1">
            {cast.map((actor) => (
              <li key={actor.id} className="text-sm">
                {actor.name}{" "}
                <span className="text-gray-500">as {actor.character}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
