import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Объединяет классы Tailwind CSS, разрешая конфликты
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
