"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui/button";
import { Search } from "lucide-react";

export function SearchInput() {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      router.push(`/search?query=${encodeURIComponent(value.trim())}`);
    }
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto flex">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search movies..."
        className="border px-4 py-2 rounded-l-lg rounded-r-none h-10 w-full"
      />
      <Button type="submit" className="rounded-l-none h-10 w-12">
        <Search />
      </Button>
    </form>
  );
}
