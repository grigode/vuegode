/** Available sizes for components */
export type Size = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | number;

/** Tailwind CSS classes mapped to each predefined size */
export const tailwindSizeMap: Record<Exclude<Size, number>, string> = {
  xs: "h-4 w-4 text-xs px-1",
  sm: "h-5 w-5 text-sm px-1.5",
  md: "h-6 w-6 text-base px-2",
  lg: "h-8 w-8 text-lg px-3",
  xl: "h-10 w-10 text-xl px-4",
  "2xl": "h-12 w-12 text-2xl px-5",
};

/**
 * Returns the corresponding Tailwind CSS classes based on the size.
 * If a number is provided, custom pixel-based sizing will be returned.
 */
export function getTailwindSize(size: Size): string {
  if (typeof size === "number") {
    return `h-[${size}px] w-[${size}px]`;
  }
  return tailwindSizeMap[size] ?? tailwindSizeMap.md;
}
