"use client";

import { useTheme } from "next-themes";
import { Sun } from "lucide-react";
import { Button } from "@/src/shared/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size={"icon"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun />
    </Button>
  );
}
