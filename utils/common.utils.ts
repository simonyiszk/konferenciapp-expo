import clsx, { ClassValue } from 'clsx';
import { useLocalSearchParams } from 'expo-router';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useSafeId() {
  const { id } = useLocalSearchParams();
  return Array.isArray(id) ? id[0] : (id ?? '');
}

export function generateId(length = 16) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}
