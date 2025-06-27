import { Loader } from "lucide-react";
import { cn } from "@/src/shared/lib/utils";

export interface ISVGProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

const LoadingSpinner = ({ size = 24, className, ...props }: ISVGProps) => {
  return (
    <Loader size={size} className={cn("animate-spin", className)} {...props} />
  );
};

export default LoadingSpinner;
