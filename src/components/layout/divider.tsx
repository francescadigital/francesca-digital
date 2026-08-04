import { cn } from "@/lib/cn";

type DividerProps = {
  className?: string;
  vertical?: boolean;
};

export function Divider({ className, vertical = false }: DividerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        vertical ? "bg-border h-full w-px" : "bg-border h-px w-full",
        className,
      )}
    />
  );
}
