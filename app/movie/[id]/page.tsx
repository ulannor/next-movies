import { fetchMovieById } from "@/entities/movie/api/fetchMovieById";
import { fetchMovieCast } from "@/entities/movie/api/fetchMovieCast";

import { MovieDetails } from "@/widgets/movie-details/ui/MovieDetails";
import { BackButton } from "@/shared/ui/sub/BackButton";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const [movie, cast] = await Promise.all([
    fetchMovieById(id),
    fetchMovieCast(id),
  ]);

  return (
    <main className="max-w-5xl mx-auto p-4 space-y-4">
      <BackButton />
      <MovieDetails movie={movie} cast={cast} />
    </main>
  );
}
