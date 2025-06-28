"use client";
import SearchGrid from "@/widgets/movie-grid/ui/SearchGrid";

export default function SearchPage() {
  return (
    <main className="p-2">
      <section className="p-4 flex flex-col">
        <SearchGrid />
      </section>
    </main>
  );
}
