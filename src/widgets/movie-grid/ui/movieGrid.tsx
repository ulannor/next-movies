"use client";

import { usePopularMovies } from "@/src/entities/movie/api/getPopularMovies";
import { Button } from "@/src/shared/ui/button";
import { MovieCard } from "@/src/entities/movie/ui/movieCard";
import { useRouter } from "next/navigation";

interface Props {
  page: number;
}

export function MovieGrid({ page }: Props) {
  const { data, isPending, isError, isFetching } = usePopularMovies(page);
  const router = useRouter();

  const goToPage = (newPage: number) => {
    router.push(`/page/${newPage}`);
  };

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error loading movies.</div>;

  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div className="flex justify-center gap-4">
        <Button
          variant="outline"
          onClick={() => goToPage(page - 1)}
          disabled={page === 1}
          className="w-24"
        >
          Previous
        </Button>
        <span className="flex items-center text-sm">
          Page {page} of {data.total_pages}
        </span>
        <Button
          variant="outline"
          onClick={() => goToPage(page + 1)}
          disabled={page >= data.total_pages}
          className="w-24"
        >
          Next
        </Button>
      </div>

      {isFetching && (
        <div className="text-center text-gray-400">Loading...</div>
      )}
    </div>
  );
}
