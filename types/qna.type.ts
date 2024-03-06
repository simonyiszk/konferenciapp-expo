export type QnaMessage = {
  id: string;
  kind: 'question' | 'answer';
  text: string;
  status: 'pending' | 'sent' | 'error';
};

export type QnaMessageDto = {
  id: number;
  userId: string;
  presentationId: string;
  content: string;
  mark: string;
  createdAt: string;
};
