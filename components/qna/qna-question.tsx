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
      className='bg-primary-500 dark:bg-primary-300 rounded-t-2xl rounded-bl-2xl p-3 mb-2 ml-5'
    >
      <StyledText className='text-white dark:text-slate-900 text-lg'>{message.text}</StyledText>
    </Animated.View>
  );
}
