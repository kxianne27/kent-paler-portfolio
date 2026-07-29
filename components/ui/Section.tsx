import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24 lg:py-32 xl:py-40", className)}
    >
      {children}
    </section>
  );
}
