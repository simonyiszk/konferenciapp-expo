import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';

import { MessagingService } from '../services/messaging.service';
import { QnaMessage } from '../types/qna.type';
import { generateId } from '../utils/common.utils';
import { useMessages } from './use-messages';

export function useMessaging(presentationId: string) {
  const initialMessages = useMessages(presentationId);
  const [messages, setMessages] = useState<QnaMessage[]>([]);

  const addMessage = (newMessage: QnaMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const updateMessage = (message: QnaMessage) => {
    setMessages((prevMessages) =>
      prevMessages.map((prevMessage) => (prevMessage.id === message.id ? message : prevMessage))
    );
  };

  const addAnswer = (answerText: string) => {
    const newMessage: QnaMessage = {
      id: generateId(),
      kind: 'answer',
      text: answerText,
      status: 'sent',
    };
    addMessage(newMessage);
  };

  const sendMessageText = (messageText: string, presentationId: string) => {
    const newMessage: QnaMessage = {
      id: generateId(),
      kind: 'question',
      text: messageText,
      status: 'pending',
    };
    addMessage(newMessage);
    MessagingService.sendMessage(messageText, presentationId)
      .then(() => {
        updateMessage({ ...newMessage, status: 'sent' });
        addAnswer('Kérdésed megkaptuk és moderálás után a felolvasandó kérdések közé kerül. Köszönjük!');
      })
      .catch((e) => {
        if (isAxiosError(e)) {
          console.error('Error sending question', e.response?.data);
        } else {
          console.error('Error sending question', e);
        }
        updateMessage({ ...newMessage, status: 'error' });
      });
  };

  useEffect(() => {
    if (initialMessages.data) {
      setMessages(initialMessages.data);
    }
  }, [initialMessages.data]);

  return { messages, sendMessageText, isLoading: initialMessages.isLoading };
}
