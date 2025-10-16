import { useMemo } from "react";
import { CSSProperties } from "styled-components";

export function useLiquidGlass({
  color = "#7dd3fc",
  alpha = 0.18,
  blur = 10,
  background = true,
  borderRadius = 20,
  saturation = 130,
  border = true,
} = {}) {
  return useMemo(() => {
    const baseColor = hexToRgba(color, alpha);

    const style = {
      borderRadius: `${borderRadius}px`,
      backdropFilter: `blur(${blur}px) saturate(${saturation}%)`,
      WebkitBackdropFilter: `blur(${blur}px) saturate(${saturation}%)`,
      background: background
        ? `linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02)), ${baseColor}`
        : "transparent",
      border: border ? "1px solid rgba(255,255,255,0.12)" : "none",
      boxShadow: "0 6px 18px rgba(15,23,42,0.15)",
      overflow: "hidden",
    };

    return style as CSSProperties;
  }, [color, alpha, blur, background, borderRadius, saturation, border]);
}

function hexToRgba(hex, alpha) {
  const h = hex.replace("#", "");
  const bigint = parseInt(
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h,
    16
  );
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
