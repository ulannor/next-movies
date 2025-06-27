import { fetchMovieById } from "@/src/entities/movie/api/fetchMovieById";
import { fetchMovieCast } from "@/src/entities/movie/api/fetchMovieCast";

import { MovieDetails } from "@/src/widgets/movie-details/ui/MovieDetails";
import { notFound } from "next/navigation";

import { BackButton } from "@/src/shared/ui/sub/BackButton";

interface PageProps {
  params: { id: string };
}

export default async function MoviePage({ params }: PageProps) {
  const movieId = params.id;

  try {
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
  } catch (e) {
    console.error("Error fetching movie details:", e);
    notFound();
  }
}
