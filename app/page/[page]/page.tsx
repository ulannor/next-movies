import { MovieGrid } from "@/widgets/movie-grid/ui/MovieGrid";

type Params = Promise<{ page: string }>;

export default async function MoviesByPage({ params }: { params: Params }) {
  const { page } = await params;
  const pageNumber = parseInt(page, 10);

  return (
    <main className="p-2">
      <section className="p-4 flex flex-col">
        <MovieGrid page={isNaN(pageNumber) ? 1 : pageNumber} />
      </section>
    </main>
  );
}
