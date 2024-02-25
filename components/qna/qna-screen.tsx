import { useEffect, useRef } from 'react';
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

export function QnaScreen() {
  const ref = useRef<ScrollView>(null);
  const id = useSafeId();
  const presentation = usePresentation(id);
  const messaging = useMessaging();
  useEffect(() => {
    const timeout = setTimeout(() => {
      ref.current?.scrollToEnd({ animated: true });
    }, 1);
    return () => clearTimeout(timeout);
  }, [messaging.messages]);
  return (
    <Screen>
      <Header>
        <Title>Kérdés küldése</Title>
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
        {messaging.messages.map((message, index) =>
          message.kind === 'question' ? (
            <QnaQuestion key={index} message={message} />
          ) : (
            <QnaAnswer key={index} message={message} />
          )
        )}
      </ScrollContent>
      <Input placeholder='Írd be a kérdésed' onSubmit={messaging.sendMessageText} />
    </Screen>
  );
}
