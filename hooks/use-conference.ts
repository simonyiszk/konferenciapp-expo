import { useQuery } from '@tanstack/react-query';

import { ConferenceService } from '../services/conference.service';

export function useConference() {
  return useQuery({
    queryKey: ['conference'],
    queryFn: ConferenceService.getConferenceData,
  });
}
