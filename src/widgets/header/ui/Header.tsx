import Link from "next/link";

export function Header() {
  return (
    <header className="w-full p-4 shadow-sm sticky top-0 z-50 bg-white dark:bg-slate-700 flex items-center justify-center">
      <div>
        <Link href="/" className="text-xl font-bold hover:underline">
          Popular Movies
        </Link>
      </div>
    </header>
  );
}
