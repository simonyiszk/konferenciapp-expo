import { useState } from 'react';

import { QnaMessage } from '../types/qna.type';

export function useMessaging() {
  const [messages, setMessages] = useState<QnaMessage[]>([]);

  const addMessage = (newMessage: QnaMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const updateMessage = (message: QnaMessage) => {
    setMessages((prevMessages) => prevMessages.map((prevMessage) => (prevMessage === message ? message : prevMessage)));
  };

  const addAnswer = (answerText: string) => {
    const newMessage: QnaMessage = {
      kind: 'answer',
      text: answerText,
      isInitial: false,
      status: 'sent',
    };
    addMessage(newMessage);
  };

  const sendMessageText = async (messageText: string) => {
    const newMessage: QnaMessage = {
      kind: 'question',
      text: messageText,
      isInitial: false,
      status: 'pending',
    };
    addMessage(newMessage);
    sendMessage(newMessage)
      .then(() => {
        updateMessage({ ...newMessage, status: 'sent' });
        addAnswer('Kérdésed megkaptuk és moderálás után a felolvasandó kérdések közé kerül. Köszönjük!');
      })
      .catch(() => {
        updateMessage({ ...newMessage, status: 'error' });
      });
  };

  return { messages, sendMessageText };
}

async function sendMessage(message: QnaMessage) {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, 2000);
  });
}
