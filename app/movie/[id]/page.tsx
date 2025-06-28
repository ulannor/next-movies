import { fetchMovieById } from "@/src/entities/movie/api/fetchMovieById";
import { fetchMovieCast } from "@/src/entities/movie/api/fetchMovieCast";

import { MovieDetails } from "@/src/widgets/movie-details/ui/MovieDetails";

import { BackButton } from "@/src/shared/ui/sub/BackButton";

export default async function Page({ params }: { params: { id: string } }) {
  const movieId = params.id;

  const [movie, cast] = await Promise.all([
    fetchMovieById(movieId),
    fetchMovieCast(movieId),
  ]);

  return (
    <main className="max-w-5xl mx-auto p-4 space-y-4">
      <BackButton />
      <MovieDetails movie={movie} cast={cast} />
    </main>
  );
}
