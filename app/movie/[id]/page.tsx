import MoviePage from "@/src/pages/MoviePage";

export default function Page({ params }: { params: { id: string } }) {
  return <MoviePage params={params} />;
}
