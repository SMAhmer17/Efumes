import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "safe" | "warning" | "destructive" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-label-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        {
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80":
            variant === "default",
          "border-transparent bg-[#e5f8f0] text-tertiary hover:bg-[#d1f4e3]": 
            variant === "safe", // Light emerald background, deep emerald text
          "border-transparent bg-[#fff0e5] text-secondary hover:bg-[#ffe2cc]":
            variant === "warning", // Light orange background, deep orange text
          "border-transparent bg-error text-error-foreground shadow hover:bg-error/80":
            variant === "destructive",
          "text-foreground border-outline-variant": variant === "outline",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
