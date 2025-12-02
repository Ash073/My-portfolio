"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import { cn } from "@/lib/utils";

interface Tab {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  type?: never;
}

interface Separator {
  type: "separator";
  title?: never;
  icon?: never;
}

type TabItem = Tab | Separator;

interface ExpandableTabsProps {
  tabs: TabItem[];
  className?: string;
  activeColor?: string;
  onChange?: (index: number | null) => void;
}

const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
    scale: 1,
  },
  animate: (isSelected: boolean) => ({
    gap: isSelected ? ".5rem" : 0,
    paddingLeft: isSelected ? "1rem" : ".5rem",
    paddingRight: isSelected ? "1rem" : ".5rem",
    scale: isSelected ? 1.05 : 1,
  }),
  hover: {
    scale: 1.1,
    transition: { duration: 0.2 },
  },
};

const spanVariants = {
  initial: { width: 0, opacity: 0, x: -10 },
  animate: { width: "auto", opacity: 1, x: 0 },
  exit: { width: 0, opacity: 0, x: -10 },
};

const iconVariants = {
  initial: { rotate: 0, scale: 1 },
  hover: { rotate: [0, -10, 10, -10, 0], scale: 1.2, transition: { duration: 0.5 } },
  tap: { scale: 0.9 },
};

const transition = { delay: 0.1, type: "spring", bounce: 0.3, duration: 0.6 };

export function ExpandableTabs({
  tabs,
  className,
  activeColor = "text-primary",
  onChange,
}: ExpandableTabsProps) {
  const [selected, setSelected] = React.useState<number | null>(null);
  const outsideClickRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [pointerGlow, setPointerGlow] = React.useState({
    x: 0,
    y: 0,
    opacity: 0,
  });

  useOnClickOutside(outsideClickRef, () => {
    setSelected(null);
    onChange?.(null);
  });

  const handleSelect = (index: number) => {
    setSelected(index);
    onChange?.(index);
  };

  const Separator = () => (
    <div 
      className="mx-1 h-[24px] w-[1.2px]" 
      style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
      aria-hidden="true" 
    />
  );

  const handlePointerMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setPointerGlow({ x, y, opacity: 0.4 });
  };

  const handlePointerLeave = () => {
    setPointerGlow((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-block"
    >
      <motion.div
        ref={outsideClickRef}
        onMouseMove={handlePointerMove}
        onMouseLeave={handlePointerLeave}
        animate={{
          y: [0, -4, 0],
          boxShadow: [
            "0 12px 30px rgba(0,0,0,0.45)",
            "0 18px 40px rgba(0,0,0,0.55)",
            "0 12px 30px rgba(0,0,0,0.45)",
          ],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 rounded-2xl border bg-background p-1 shadow-lg overflow-hidden backdrop-blur-xl",
          className
        )}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 255, 255, 0.1)",
        }}
        whileHover={{ 
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 255, 255, 0.15)",
          transition: { duration: 0.3 }
        }}
      >
      <motion.div
        ref={containerRef}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          animate={{ opacity: pointerGlow.opacity }}
          style={{
            left: pointerGlow.x,
            top: pointerGlow.y,
            width: 220,
            height: 220,
            background:
              "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "linear-gradient(120deg, rgba(99,102,241,0.25), rgba(14,165,233,0.25), rgba(236,72,153,0.25))",
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none"
        animate={{
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          return <Separator key={`separator-${index}`} />;
        }

        const Icon = tab.icon;
        const isSelected = selected === index;

        return (
          <motion.button
            key={tab.title}
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            custom={isSelected}
            onClick={() => handleSelect(index)}
            transition={transition}
            className={cn(
              "relative flex items-center rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300",
              isSelected
                ? "bg-white/15 shadow-lg"
                : "hover:bg-white/10"
            )}
            style={{
              color: isSelected ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.7)",
            }}
          >
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              className="relative"
            >
              <Icon size={20} />
              <motion.span
                className="absolute inset-0 rounded-full bg-white/30 blur-md"
                animate={{
                  opacity: isSelected ? [0.2, 0.6, 0.2] : 0,
                  scale: isSelected ? [1, 1.3, 1] : 1,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            <AnimatePresence initial={false}>
              {isSelected && (
                <motion.span
                  variants={spanVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={transition}
                  className="overflow-hidden whitespace-nowrap ml-2"
                  style={{ fontWeight: 600 }}
                >
                  {tab.title}
                </motion.span>
              )}
            </AnimatePresence>
            {isSelected && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 to-white/5"
                initial={false}
                transition={transition}
                style={{ zIndex: -1 }}
              />
            )}
          </motion.button>
        );
      })}
      </motion.div>
    </motion.div>
  );
}

