"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  // radius এখন sm, md, lg অপশনাল অবজেক্ট নিবে
  radius?: number | { sm: number; md?: number; lg?: number };
  darkness?: number;
  revealOpacity?: number;
  fixed?: boolean;
  initialPos?: { x: number; y: number } | null;
  isPersist?: boolean;
}

export function DynamicSpotlight({
  children,
  className,
  radius = 150,
  darkness = 0.3,
  revealOpacity = 0.35,
  fixed = false,
  initialPos = null,
  isPersist = false,
  ...props
}: SpotlightProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  const [fixedPos, setfixedPos] = React.useState(fixed);
  // Initial radius logic
  const [currentRadius, setCurrentRadius] = React.useState(() => {
    if (typeof radius === "number") return radius;
    return radius.sm;
  });

  const [pos, setPos] = React.useState<{ x: number; y: number } | null>(
    initialPos,
  );
  const [hover, setHover] = React.useState(false);
  const [persist, setPersist] = React.useState(isPersist);

  React.useLayoutEffect(() => {
    const updateResponsiveSettings = () => {
      const width = window.innerWidth;

      // Fixed Position Logic (Mobile/Tablet এ fixed থাকবে যদি fixed prop false হয়)
      if (!fixed) {
        setfixedPos(width <= 850);
      }

      // Radius Breakpoint Logic
      if (typeof radius === "object") {
        if (width >= 1024 && radius.lg) {
          setCurrentRadius(radius.lg);
        } else if (width >= 768 && radius.md) {
          setCurrentRadius(radius.md);
        } else {
          setCurrentRadius(radius.sm);
        }
      } else {
        setCurrentRadius(radius);
      }
    };

    updateResponsiveSettings();
    window.addEventListener("resize", updateResponsiveSettings);
    return () => window.removeEventListener("resize", updateResponsiveSettings);
  }, [fixed, radius]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (fixedPos) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const maskPosition = fixedPos
    ? "50% 50%"
    : pos
      ? `${pos.x}px ${pos.y}px`
      : "50% 50%";

  return (
    <div
      ref={ref}
      onMouseEnter={() => {
        if (!fixedPos) {
          setHover(true);
          setPersist(true);
        }
      }}
      onMouseMove={handleMouseMove}
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <div className="relative z-10">{children}</div>

      <div
        className="pointer-events-none absolute inset-0 transition-all duration-300 ease-out"
        style={{
          backgroundColor: `rgba(0,0,0,${darkness})`,
          WebkitMaskImage:
            hover || persist || fixedPos
              ? `radial-gradient(${currentRadius}px at ${maskPosition}, rgba(0,0,0,${revealOpacity}) 0%, black 70%)`
              : undefined,
          maskImage:
            hover || persist || fixedPos
              ? `radial-gradient(${currentRadius}px at ${maskPosition}, rgba(0,0,0,${revealOpacity}) 0%, black 70%)`
              : undefined,
        }}
      />
    </div>
  );
}
