import { useQuery } from "@tanstack/react-query";
import { tmdbApi } from "@/src/shared/api/tmdb";

export function useSearchMovies(query: string, page = 1) {
  return useQuery({
    queryKey: ["search", query, page],
    queryFn: async () => {
      const { data } = await tmdbApi.get("/search/movie", {
        params: { query, page },
      });
      return data;
    },
    enabled: !!query,
  });
}
