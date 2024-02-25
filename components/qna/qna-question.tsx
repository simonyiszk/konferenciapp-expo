import { View } from 'react-native';

import { StyledText } from '../base/text';

interface QnaQuestionProps {
  question: string;
}

export function QnaQuestion({ question }: QnaQuestionProps) {
  return (
    <View className='bg-primary-500 dark:bg-primary-300 rounded-t-2xl rounded-bl-2xl p-3 mb-2 ml-5'>
      <StyledText className='text-white dark:text-slate-900 text-lg'>{question}</StyledText>
    </View>
  );
}
