import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { tmdbApi } from "@/src/shared/api/tmdb";
import { Movie } from "../model/types";

interface PopularMoviesResponse {
  results: Movie[];
  page: number;
  total_pages: number;
}

export const usePopularMovies = (page: number) =>
  useQuery<PopularMoviesResponse, Error>({
    queryKey: ["popular-movies", page],
    queryFn: async () => {
      const { data } = await tmdbApi.get("/movie/popular", {
        params: { page },
      });
      return data;
    },
    placeholderData: keepPreviousData,
  });
