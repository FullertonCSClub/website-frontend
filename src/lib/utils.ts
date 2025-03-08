import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names using clsx and merges Tailwind CSS classes using tailwind-merge
 * to avoid conflicts and optimize the final class string.
 * 
 * @param inputs - Class values to be combined
 * @returns A string of combined and optimized class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
