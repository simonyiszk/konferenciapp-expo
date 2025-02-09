import { Redirect } from 'expo-router';
import { useFeatureFlag } from 'posthog-react-native';
import { useEffect, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native';

import { useMessaging } from '../../hooks/use-messaging';
import { usePresentation } from '../../hooks/use-presentation';
import { useSafeId } from '../../utils/common.utils';
import { Screen } from '../base/screen';
import { ScrollContent } from '../base/scroll-content';
import { Header } from '../common/header';
import { SkeletonTitle } from '../common/skeletons/skeleton-title';
import { Subtitle } from '../common/subtitle';
import { Title } from '../common/title';
import { Input } from './input';
import { QnaAnswer } from './qna-answer';
import { QnaQuestion } from './qna-question';
import { QnaSkeleton } from './qna-skeleton';

const MAX_QUESTION_COUNT = 3;

export function QnaScreen() {
  const { t } = useTranslation();
  const ref = useRef<ScrollView>(null);
  const id = useSafeId();
  const presentation = usePresentation(id);
  const messaging = useMessaging(id);
  const enableQna = useFeatureFlag('enable_qna');

  useEffect(() => {
    const timeout = setTimeout(() => {
      ref.current?.scrollToEnd({ animated: true });
    }, 1);
    return () => clearTimeout(timeout);
  }, [messaging.messages]);

  const questionCount = useMemo(
    () => messaging.messages.filter((message) => message.kind === 'question').length,
    [messaging.messages]
  );

  const remainingQuestions = Math.max(0, MAX_QUESTION_COUNT - questionCount);

  const onSubmission = (messageText: string) => {
    messaging.sendMessageText(messageText, id);
  };

  if (!enableQna) return <Redirect href='/' />;

  return (
    <Screen analyticsScreenName={`qna/${id}`}>
      <Header>
        <Title>{t('qna.title')}</Title>
        {presentation.isLoading && <SkeletonTitle />}
        {presentation.data && <Subtitle>{presentation.data.title}</Subtitle>}
      </Header>
      <ScrollContent
        ref={ref}
        contentContainerStyle={{
          paddingBottom: 200,
        }}
        automaticallyAdjustKeyboardInsets
      >
        {messaging.isLoading && <QnaSkeleton />}
        {messaging.messages.map((message, index) =>
          message.kind === 'question' ? (
            <QnaQuestion key={index} message={message} />
          ) : (
            <QnaAnswer key={index} message={message} />
          )
        )}
      </ScrollContent>
      <Input
        disabled={remainingQuestions === 0 || messaging.isLoading}
        placeholder={`${t('qna.placeholder')} (${remainingQuestions} ${t('qna.remainingQuestions')})`}
        onSubmit={onSubmission}
      />
    </Screen>
  );
}
