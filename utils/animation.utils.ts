import { useEffect, useState } from 'react';
import { Animated, Easing } from 'react-native';

export function usePulseAnimation() {
  const [pulseValue] = useState(new Animated.Value(0));

  useEffect(() => {
    const startAnimation = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseValue, {
            toValue: 1,
            duration: 1000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(pulseValue, {
            toValue: 0,
            duration: 1000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    startAnimation();

    return () => {
      pulseValue.stopAnimation();
    };
  }, [pulseValue]);

  return {
    opacity: pulseValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 0.5, 1],
    }),
  };
}
