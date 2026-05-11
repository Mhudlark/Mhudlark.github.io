"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const COLORS = [
  "#FF6B6B", // Coral red
  "#4ECDC4", // Teal
  "#FFE66D", // Sunny yellow
  "#95E1D3", // Mint green
  "#F38181", // Salmon pink
  "#AA96DA", // Lavender
  "#FCBAD3", // Rose pink
];

export function BouncingDVD() {
  const positionRef = useRef({ x: 100, y: 100 });
  const velocityRef = useRef({ x: 2.25, y: 1.5 });
  const [colorIndex, setColorIndex] = useState(0);
  const [renderPosition, setRenderPosition] = useState({ x: 100, y: 100 });
  const animationRef = useRef<number | null>(null);
  // 2067 x 935 source aspect ratio -> height = width * 935 / 2067
  const logoSize = { width: 200, height: Math.round((200 * 935) / 2067) };

  const getViewportBounds = useCallback(() => {
    // Use clientWidth/clientHeight to exclude scrollbar width
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;
    return {
      minX: window.scrollX,
      minY: window.scrollY,
      maxX: window.scrollX + viewportWidth - logoSize.width,
      maxY: window.scrollY + viewportHeight - logoSize.height,
    };
  }, [logoSize.width, logoSize.height]);

  useEffect(() => {
    // Initialize position within current viewport
    const bounds = getViewportBounds();
    positionRef.current = {
      x: bounds.minX + 100,
      y: bounds.minY + 100,
    };
    setRenderPosition(positionRef.current);
  }, [getViewportBounds]);

  useEffect(() => {
    const animate = () => {
      const bounds = getViewportBounds();
      const pos = positionRef.current;
      const vel = velocityRef.current;

      let newX = pos.x + vel.x;
      let newY = pos.y + vel.y;
      let bounced = false;

      // Bounce off left or right edge of viewport
      if (newX <= bounds.minX) {
        newX = bounds.minX;
        velocityRef.current.x = Math.abs(vel.x);
        bounced = true;
      } else if (newX >= bounds.maxX) {
        newX = bounds.maxX;
        velocityRef.current.x = -Math.abs(vel.x);
        bounced = true;
      }

      // Bounce off top or bottom edge of viewport
      if (newY <= bounds.minY) {
        newY = bounds.minY;
        velocityRef.current.y = Math.abs(vel.y);
        bounced = true;
      } else if (newY >= bounds.maxY) {
        newY = bounds.maxY;
        velocityRef.current.y = -Math.abs(vel.y);
        bounced = true;
      }

      if (bounced) {
        setColorIndex((c) => (c + 1) % COLORS.length);
      }

      positionRef.current = { x: newX, y: newY };
      setRenderPosition({ x: newX, y: newY });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [getViewportBounds]);

  return (
    <div
      className="pointer-events-none z-10"
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: logoSize.width,
        height: logoSize.height,
        opacity: 0.5,
        filter: `drop-shadow(0 0 8px ${COLORS[colorIndex]})`,
        transform: `translate3d(${renderPosition.x}px, ${renderPosition.y}px, 0)`,
        WebkitTransform: `translate3d(${renderPosition.x}px, ${renderPosition.y}px, 0)`,
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
    >
      <div
        className="w-full h-full"
        aria-hidden="true"
        style={{
          backgroundColor: COLORS[colorIndex],
          WebkitMaskImage: `url('/images/dvd-logo.png')`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          WebkitMaskPosition: "center",
          maskImage: `url('/images/dvd-logo.png')`,
          maskRepeat: "no-repeat",
          maskSize: "contain",
          maskPosition: "center",
        }}
      />
    </div>
  );
}
