import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { isBefore } from 'date-fns';

import { posthog } from '../config/posthog.config';
import { QnaMessage, QnaMessageDto } from '../types/qna.type';
import { generateId } from '../utils/common.utils';

const featureFlagName = 'enable_qna';

export class MessagingService {
  static userId: string;
  private static baseUrl: string;
  private static enableQna: boolean;
  static async getMessagesForPresentationAndUser(presentationId: string): Promise<QnaMessage[]> {
    const userId = await this.getUserId();
    const response = await axios.get<QnaMessageDto[]>(
      `${this.baseUrl}/api/presentation/${presentationId}/question?userid=${userId}`
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
    return axios.post(`${this.baseUrl}/api/presentation/${presentationId}/question`, {
      content,
      userId,
    });
  }

  static async getUserId(): Promise<string> {
    if (this.userId) return this.userId;
    let userIdFromStorage = await AsyncStorage.getItem('userId');
    if (!userIdFromStorage) {
      userIdFromStorage = generateId();
      AsyncStorage.setItem('userId', userIdFromStorage);
    }
    this.userId = userIdFromStorage;
    return userIdFromStorage;
  }

  static async init() {
    const enableQnaFromPosthog = posthog.getFeatureFlag(featureFlagName);
    if (enableQnaFromPosthog) {
      this.enableQna = Boolean(enableQnaFromPosthog);
    }
    const urlFromPosthog = posthog.getFeatureFlagPayload(featureFlagName);
    if (urlFromPosthog) {
      this.baseUrl = urlFromPosthog.toString();
    }
  }
}
