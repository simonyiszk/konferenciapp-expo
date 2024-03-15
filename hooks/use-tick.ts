import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';

export function useTick(initialDate = new Date()) {
  const [date, setDate] = useState(initialDate);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000 * 15);
    return () => clearInterval(interval);
  }, []);

  useFocusEffect(
    useCallback(() => {
      setDate(new Date());
    }, [])
  );

  return { date, setDate };
}
