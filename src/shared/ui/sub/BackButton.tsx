"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui/button";

export function BackButton() {
  const router = useRouter();

  return (
    <Button variant="outline" onClick={() => router.back()}>
      ← Back
    </Button>
  );
}
