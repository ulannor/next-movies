// src/app/search/page.tsx
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useSearchMovies } from "@/entities/movie/api/useSearchMovies";
import { MovieCard } from "@/entities/movie/ui/MovieCard";
import { Button } from "@/shared/ui/button";
import LoadingSpinner from "@/shared/ui/sub/LoadingSpinner";
import { Movie } from "@/entities/movie/model/types";
import { LikeButton } from "@/features/favorites/ui/LikeButton";

export default function SearchGrid() {
  const searchParams = useSearchParams() ?? new URLSearchParams();
  const router = useRouter();

  const query = searchParams.get("query") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);

  const { data, isPending, isError, isFetching } = useSearchMovies(query, page);

  const goToPage = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    router.push(`/search?${params.toString()}`);
  };

  if (!query)
    return <div className="text-center py-12">Enter a search query</div>;

  if (isPending)
    return (
      <div className="flex justify-center items-center py-12">
        <LoadingSpinner size={32} className="text-gray-500" />
      </div>
    );

  if (isError)
    return (
      <div className="text-center py-12">Error loading search results.</div>
    );

  return (
    <div className="space-y-6 ">
      <h2 className="text-xl font-semibold">
        Results for: &quot;{query}&quot;
      </h2>

      {data.results.length === 0 ? (
        <div className="text-center text-gray-500 py-12">
          No movies found for your search.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {data.results.map((movie: Movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              actionSlot={<LikeButton movie={movie} />}
            />
          ))}
        </div>
      )}
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
        <div className="flex justify-center pt-4">
          <LoadingSpinner className="text-gray-400" />
        </div>
      )}
    </div>
  );
}
