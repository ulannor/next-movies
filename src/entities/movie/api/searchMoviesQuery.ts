import { tmdbApi } from "@/src/shared/api/tmdb";
import { Movie } from "../model/types";
import { useQuery } from "@tanstack/react-query";

interface SearchResponse {
  results: Movie[];
}

async function searchMovies(query: string): Promise<Movie[]> {
  const { data } = await tmdbApi.get<SearchResponse>("/search/movie", {
    params: { query },
  });
  return data.results;
}

export const useSearchMoviesQuery = (query: string) =>
  useQuery<Movie[]>({
    queryKey: ["search-movies", query],
    queryFn: () => searchMovies(query),
    enabled: !!query.trim(),
  });
