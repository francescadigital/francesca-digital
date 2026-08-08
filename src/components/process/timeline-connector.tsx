import { cn } from "@/lib/cn";

type TimelineConnectorProps = {
  className?: string;
};

export function TimelineConnector({ className }: TimelineConnectorProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "bg-border absolute",
        "top-5 bottom-[-3rem] left-[0.5625rem] w-px",
        "lg:top-[0.5625rem] lg:right-[-2rem] lg:bottom-auto lg:left-[1.25rem] lg:h-px lg:w-auto",
        className,
      )}
    />
  );
}
