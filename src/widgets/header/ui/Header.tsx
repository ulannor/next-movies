import Link from "next/link";
import { SearchInput } from "@/src/features/search/ui/SearchInput";

export function Header() {
  return (
    <header className="w-full sticky top-0 z-50 sm:py-4">
      <div className="bg-background/20 backdrop-blur-sm flex items-center justify-between gap-4 px-4 py-3 max-w-4xl w-full mx-auto rounded shadow-md">
        <Link href="/" className="text-xl font-bold hover:underline">
          Home
        </Link>
        <SearchInput />
      </div>
    </header>
  );
}
