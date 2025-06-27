import { tmdbApi } from "@/src/shared/api/tmdb";
import { Movie } from "../model/types";

export async function fetchMovieById(id: string): Promise<Movie> {
  const { data } = await tmdbApi.get(`/movie/${id}`, {
    params: { language: "en-US" },
  });
  return data;
}
