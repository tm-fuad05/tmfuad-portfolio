"use client";

import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface HoverLightProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement;
  className?: string;
  size?: number;
  color?: string;
  innerOpacity?: number;
  borderOpacity?: number;
  border?: number;
}

export default function HoverLight({
  children,
  className = "",
  size = 400,
  color = "#ffffff",
  innerOpacity = 20,
  borderOpacity = 100, // ডিফল্ট ফুল অপাসিটি
  border = 1,
  ...props
}: HoverLightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: -2000, y: -2000 });
  const [isInside, setIsInside] = useState(false);
  const [radius, setRadius] = useState("0px");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useLayoutEffect(() => {
    if (containerRef.current) {
      const child = containerRef.current.querySelector(
        ":scope > div > div > div:first-child",
      );
      if (child) {
        setRadius(window.getComputedStyle(child).borderRadius);
      }
    }
  }, [children]);

  useEffect(() => {
    if (!isDesktop) return;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      setIsInside(
        e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom,
      );
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, [isDesktop]);

  // বর্ডার এবং ইনার কালার এখন প্রপস অনুযায়ী ডাইনামিক
  const borderlinearColor = `color-mix(in srgb, ${color}, transparent ${
    100 - borderOpacity
  }%)`;
  const innerlinearColor = `color-mix(in srgb, ${color}, transparent ${
    100 - innerOpacity
  }%)`;

  return (
    <div
      ref={containerRef}
      style={{
        padding: isDesktop ? `${border}px` : "0px",
        borderRadius: radius,
      }}
      className={cn("relative bg-transparent overflow-visible", className)}
      {...props}
    >
      {/* ১. বর্ডার স্পটলাইট */}
      {isDesktop && (
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            borderRadius: radius,
            background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, ${borderlinearColor}, transparent 100%)`,
          }}
        />
      )}

      {/* ২. ইনার কন্টেইনার */}
      <div
        className="relative h-full w-full bg-transparent overflow-hidden z-10"
        style={{
          borderRadius: isDesktop ? `calc(${radius} - ${border}px)` : radius,
        }}
      >
        {/* ৩. ইনার স্পটলাইট */}
        {isDesktop && (
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-500 z-10"
            style={{
              opacity: isInside ? 1 : 0,
              background: `radial-linear(${size}px circle at ${position.x}px ${position.y}px, ${innerlinearColor}, transparent 100%)`,
            }}
          />
        )}

        {/* ৪. চিল্ড্রেন ডিভ */}
        <div className="relative z-0 h-full w-full">{children}</div>
      </div>
    </div>
  );
}
