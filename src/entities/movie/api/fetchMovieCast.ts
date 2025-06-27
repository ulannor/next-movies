import { tmdbApi } from "@/src/shared/api/tmdb";

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
  order: number;
}

export async function fetchMovieCast(movieId: string): Promise<CastMember[]> {
  const { data } = await tmdbApi.get(`/movie/${movieId}/credits`);
  return data.cast.slice(0, 5);
}
