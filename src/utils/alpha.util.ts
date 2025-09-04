const hexToRgba = (hex: string) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
};

export const alpha = (hex: string, opacity: number) => {
  const rgba = hexToRgba(hex);
  return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${opacity})`;
};
