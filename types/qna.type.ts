export type QnaMessage = {
  id: string;
  kind: 'question' | 'answer';
  text: string;
  isInitial: boolean;
  status: 'pending' | 'sent' | 'error';
};
