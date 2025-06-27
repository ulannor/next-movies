import { MovieGrid } from "@/src/widgets/movie-grid/ui/MovieGrid";

export default function HomePage() {
  return (
    <main className="p-2">
      <section className="p-4 flex flex-col">
        <MovieGrid page={1} />
      </section>
    </main>
  );
}
