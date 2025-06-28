import LoadingSpinner from "@/src/shared/ui/sub/LoadingSpinner";
import SearchPage from "@/src/views/SearchPage";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center py-12">
          <LoadingSpinner size={32} className="text-gray-500" />
        </div>
      }
    >
      <SearchPage />
    </Suspense>
  );
}
