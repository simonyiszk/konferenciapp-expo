import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { QNA_API_BASE_URL } from '../config/env.config';
import { QnaMessage } from '../types/qna.type';
import { generateId } from '../utils/common.utils';

export function useMessaging() {
  const [messages, setMessages] = useState<QnaMessage[]>([]);
  const [userId, setUserId] = useState<string>();

  const loadUserId = () => {
    AsyncStorage.getItem('userId').then((userId) => {
      if (!userId) {
        userId = generateId();
        AsyncStorage.setItem('userId', userId);
      }
      setUserId(userId);
    });
  };

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
      isInitial: false,
      status: 'sent',
    };
    addMessage(newMessage);
  };

  const sendMessageText = (messageText: string, presentationId: string) => {
    if (!userId) return;
    const newMessage: QnaMessage = {
      id: generateId(),
      kind: 'question',
      text: messageText,
      isInitial: false,
      status: 'pending',
    };
    addMessage(newMessage);
    sendMessage(messageText, presentationId, userId)
      .then(() => {
        updateMessage({ ...newMessage, status: 'sent' });
        addAnswer('Kérdésed megkaptuk és moderálás után a felolvasandó kérdések közé kerül. Köszönjük!');
      })
      .catch(() => {
        updateMessage({ ...newMessage, status: 'error' });
      });
  };

  useEffect(() => {
    loadUserId();
  }, []);

  return { messages, sendMessageText };
}

async function sendMessage(content: string, presentationId: string, userId: string) {
  return await axios.post(`${QNA_API_BASE_URL}/api/presentation/${presentationId}/questions`, {
    content,
    userId,
  });
}
