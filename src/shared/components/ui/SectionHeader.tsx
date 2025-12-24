import * as React from "react";
import { cn } from "@/shared/utils/cn";

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  subtitle?: string;
  gradient?: boolean;
}

export function SectionHeader({
  title,
  description,
  subtitle,
  gradient = false,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-4", className)} {...props}>
      {subtitle && (
        <h3 className="text-xl font-bold font-cinzel text-zinc-400 uppercase tracking-[0.3em] -mb-2">
          {subtitle}
        </h3>
      )}
      <div className="space-y-2">
        <h2
          className={cn(
            "text-5xl font-normal font-starwars uppercase",
            gradient ? "text-gradient" : "text-white"
          )}
        >
          {title}
        </h2>
        {description && (
          <p className="text-zinc-500 max-w-xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

