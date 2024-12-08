import { useQuery } from '@tanstack/react-query';

import { MockConferenceService } from '../services/mock-conference.service';

const REFRESH_INTERVAL = 1000 * 60; // 1 minute

export function useConference() {
  return useQuery({
    queryKey: ['conference'],
    queryFn: MockConferenceService.getConferenceData,
    refetchInterval: REFRESH_INTERVAL,
  });
}
