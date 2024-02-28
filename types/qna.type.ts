export type QnaMessage = {
  kind: 'question' | 'answer';
  text: string;
  isInitial: boolean;
  status: 'pending' | 'sent' | 'error';
};
