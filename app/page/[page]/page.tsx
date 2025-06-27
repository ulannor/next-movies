import { MovieGrid } from "@/src/widgets/movie-grid/ui/MovieGrid";

interface PageProps {
  params: { page: string };
}

export default function MoviesByPage({ params }: PageProps) {
  const page = parseInt(params.page, 10);

  return (
    <main className="p-2">
      <section className="p-4 flex flex-col">
        <MovieGrid page={isNaN(page) ? 1 : page} />;
      </section>
    </main>
  );
}
