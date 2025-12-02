import * as React from "react"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

import type { LucideIcon } from "lucide-react"

interface DockProps {
  className?: string
  items: {
    icon: LucideIcon
    label: string
    onClick?: () => void
  }[]
}

interface DockIconButtonProps {
  icon: LucideIcon
  label: string
  onClick?: () => void
  className?: string
}

const DockIconButton = React.forwardRef<HTMLButtonElement, DockIconButtonProps>(
  ({ icon: Icon, label, onClick, className }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.3, y: -8 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        className={cn(
          "relative group p-4 rounded-xl",
          "bg-gray-900/80 backdrop-blur-lg",
          "border border-gray-700",
          "hover:bg-gray-800/90 transition-all duration-300",
          "shadow-lg hover:shadow-2xl",
          "cursor-pointer",
          "flex items-center justify-center",
          className
        )}
      >
        <Icon className="w-6 h-6 text-gray-200" />
        <span className={cn(
          "absolute -top-10 left-1/2 -translate-x-1/2",
          "px-3 py-1.5 rounded-lg text-sm",
          "bg-gray-900/90 text-gray-100",
          "opacity-0 group-hover:opacity-100",
          "transition-all duration-300 whitespace-nowrap pointer-events-none",
          "shadow-xl",
          "z-50"
        )}>
          {label}
        </span>
      </motion.button>
    )
  }
)

DockIconButton.displayName = "DockIconButton"

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ items, className }, ref) => {
    return (
      <div ref={ref} className={cn("flex items-center justify-center p-4", className)}>
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className={cn(
            "flex items-center gap-3 p-4 rounded-3xl",
            "bg-gray-900/60 backdrop-blur-2xl border border-gray-700/50",
            "shadow-2xl",
            "hover:shadow-3xl transition-all duration-500",
            "z-50"
          )}
        >
          {items.map((item) => (
            <DockIconButton key={item.label} {...item} />
          ))}
        </motion.div>
      </div>
    )
  }
)

Dock.displayName = "Dock"

export { Dock, DockIconButton }