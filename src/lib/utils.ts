import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatUSD(value: string) {
  const number = parseFloat(value);
  return isNaN(number) ? value : new Intl.NumberFormat('en-US', { style: 'currency',currency: 'USD',}).format(number);
}