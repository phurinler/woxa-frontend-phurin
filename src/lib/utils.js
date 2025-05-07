import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatSearchedFilter(query) {
  const namePart = query.name ? [`"${query.name}"`] : [];
  const categoryPart = Array.isArray(query.category)
    ? query.category
    : query.category
    ? [query.category]
    : [];

  const result = [...namePart, ...categoryPart].join(", ") || "ทั้งหมด";

  return result;
}
