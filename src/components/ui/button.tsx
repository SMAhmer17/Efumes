import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "action" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 text-label-md",
          {
            "bg-primary text-primary-foreground shadow hover:bg-primary/90":
              variant === "default",
            "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/90":
              variant === "action",
            "bg-surface-dim text-foreground shadow-sm hover:bg-surface-dim/80":
              variant === "secondary",
            "border border-outline bg-transparent shadow-sm hover:bg-surface-dim":
              variant === "outline",
            "hover:bg-surface-dim hover:text-foreground":
              variant === "ghost",
            "h-9 px-4 py-2": size === "default",
            "h-8 rounded-sm px-3 text-label-sm": size === "sm",
            "h-10 rounded-md px-8": size === "lg",
            "h-9 w-9": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
