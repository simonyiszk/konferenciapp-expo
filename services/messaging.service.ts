import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { isBefore } from 'date-fns';

import { QNA_API_BASE_URL } from '../config/env.config';
import { QnaMessage, QnaMessageDto } from '../types/qna.type';
import { generateId } from '../utils/common.utils';

export class MessagingService {
  static userId: string;

  static async getMessagesForPresentationAndUser(presentationId: string): Promise<QnaMessage[]> {
    const userId = await this.getUserId();
    const response = await axios.get<QnaMessageDto[]>(
      `${QNA_API_BASE_URL}/api/presentation/${presentationId}/question?userid=${userId}`
    );
    const messages = response.data;
    messages.sort((a, b) => (isBefore(a.createdAt, b.createdAt) ? -1 : 1));
    return messages.map<QnaMessage>((message) => ({
      id: message.id.toString(),
      kind: 'question',
      text: message.content,
      status: 'sent',
    }));
  }

  static async sendMessage(content: string, presentationId: string) {
    const userId = await this.getUserId();
    return axios.post(`${QNA_API_BASE_URL}/api/presentation/${presentationId}/question`, {
      content,
      userId,
    });
  }

  private static async getUserId(): Promise<string> {
    if (this.userId) return this.userId;
    let userIdFromStorage = await AsyncStorage.getItem('userId');
    if (!userIdFromStorage) {
      userIdFromStorage = generateId();
      AsyncStorage.setItem('userId', userIdFromStorage);
    }
    this.userId = userIdFromStorage;
    return userIdFromStorage;
  }
}
