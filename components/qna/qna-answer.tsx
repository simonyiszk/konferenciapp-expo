import { useEffect } from 'react';
import { Animated } from 'react-native';

import { QnaMessage } from '../../types/qna.type';
import { useAnimated } from '../../utils/animation.utils';
import { StyledText } from '../base/text';

interface QnaAnswerProps {
  message: QnaMessage;
}

export function QnaAnswer({ message }: QnaAnswerProps) {
  const { value, forward } = useAnimated();
  useEffect(() => {
    if (!message.isInitial) forward();
  }, []);
  return (
    <Animated.View
      style={{
        transform: [
          {
            translateY: value.current.interpolate({
              inputRange: [0, 1],
              outputRange: [100, 0],
            }),
          },
        ],
        opacity: value.current.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      }}
      className='bg-white dark:bg-background-800 rounded-t-2xl rounded-br-2xl p-3 mb-2 mr-5'
    >
      <StyledText className='text-background-900 dark:text-white text-lg'>{message.text}</StyledText>
    </Animated.View>
  );
}
