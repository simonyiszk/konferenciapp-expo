import clsx, { ClassValue } from 'clsx';
import { useLocalSearchParams } from 'expo-router';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useSafeId() {
  const { id } = useLocalSearchParams();
  return Array.isArray(id) ? id[0] : id ?? '';
}

export function useSafeSlug() {
  const { slug } = useLocalSearchParams();
  return Array.isArray(slug) ? slug[0] : slug ?? '';
}
