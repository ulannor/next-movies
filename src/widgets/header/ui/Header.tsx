import Link from "next/link";
import { SearchInput } from "@/features/search/ui/SearchInput";
import { ModeToggle } from "@/features/mode/ui/ModeToggle";

export function Header() {
  return (
    <header className="w-full sticky top-0 z-50 sm:py-4">
      <div className="bg-background/20 backdrop-blur-sm flex items-center justify-center gap-4 px-4 py-3 w-full max-w-4xl mx-auto rounded shadow-md">
        <Link href="/" className="text-xl font-bold hover:underline">
          Home
        </Link>
        <SearchInput />
        <ModeToggle />
      </div>
    </header>
  );
}
