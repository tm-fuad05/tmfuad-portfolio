"use client";

import { ReactLenis } from "lenis/react";
import AnchorScroll from "./AnchorScroll";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        smoothWheel: true,
        syncTouch: false,
        touchMultiplier: 1.5,
        anchors: false,
      }}
    >
      <AnchorScroll />
      {children}
    </ReactLenis>
  );
}
