import { useEffect } from 'react';
import { Animated } from 'react-native';

import { QnaMessage } from '../../types/qna.type';
import { useAnimated } from '../../utils/animation.utils';
import { StyledText } from '../base/text';

interface QnaQuestionProps {
  message: QnaMessage;
}

export function QnaQuestion({ message }: QnaQuestionProps) {
  const { value, forward } = useAnimated();
  useEffect(forward, []);
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
      className='bg-primary-500 dark:bg-primary-300 rounded-t-2xl rounded-bl-2xl p-3 mb-2 ml-5'
    >
      <StyledText className='text-white dark:text-background-900 text-lg'>{message.text}</StyledText>
      {message.status === 'pending' && (
        <StyledText className='text-white/80 dark:text-background-800/80 text-xs text-right'>Küldés...</StyledText>
      )}
      {message.status === 'error' && (
        <StyledText className='text-white/80 dark:text-background-800/80 text-xs text-right'>Hiba</StyledText>
      )}
    </Animated.View>
  );
}
