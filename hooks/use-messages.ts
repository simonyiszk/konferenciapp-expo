import { useQuery } from '@tanstack/react-query';

import { MessagingService } from '../services/messaging.service';

export function useMessages(presentationId: string) {
  return useQuery({
    queryKey: ['messages'],
    queryFn: () => MessagingService.getMessagesForPresentationAndUser(presentationId),
  });
}
