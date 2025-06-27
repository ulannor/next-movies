import { tmdbApi } from "@/src/shared/api/tmdb";
import { Movie } from "../model/types";

interface SearchResponse {
  results: Movie[];
}

export async function searchMovies(query: string): Promise<Movie[]> {
  const { data } = await tmdbApi.get<SearchResponse>("/search/movie", {
    params: { query },
  });
  return data.results;
}
