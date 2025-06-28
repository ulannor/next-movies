"use client";

import { Button } from "@/shared/ui/button";
import { BackButton } from "@/shared/ui/sub/BackButton";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h2 className="text-2xl font-semibold text-destructive mb-4">
        No movie found
      </h2>
      <p className="text-gray-700 mb-6">
        We’re sorry! Seems like the URL is incorrect.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <BackButton />

        <Button onClick={() => reset()}>Try again</Button>
      </div>
    </div>
  );
}
