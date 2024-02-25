import { View } from 'react-native';

import { StyledText } from '../base/text';

interface QnaAnswerProps {
  answer: string;
}

export function QnaAnswer({ answer }: QnaAnswerProps) {
  return (
    <View className='bg-white dark:bg-slate-800 rounded-t-2xl rounded-br-2xl p-3 mb-2 mr-5'>
      <StyledText className='text-slate-900 dark:text-white text-lg'>{answer}</StyledText>
    </View>
  );
}
