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
        // Higher lerp = snappier scroll (less "floaty" lag). Do not use duration with lerp.
        lerp: 0.1,
        // duration: 1.2,
        smoothWheel: true,
        syncTouch: true,
        anchors: false,
      }}
    >
      <AnchorScroll />
      {children}
    </ReactLenis>
  );
}
