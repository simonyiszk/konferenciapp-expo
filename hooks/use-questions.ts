import { useQuery } from '@tanstack/react-query';

type QuestionDto = {
  text: string;
};

export function useQuestions() {
  return useQuery<QuestionDto[]>({
    queryKey: ['questions'],
    queryFn: async () => {
      return [
        {
          text: 'What is the meaning of life? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      ];
    },
  });
}
