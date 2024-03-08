import { useQuery } from '@tanstack/react-query';

import { ConferenceService } from '../services/conference.service';

const REFRESH_INTERVAL = 1000 * 60; // 1 minute

export function useConference() {
  return useQuery({
    queryKey: ['conference'],
    queryFn: ConferenceService.getConferenceData,
    refetchInterval: REFRESH_INTERVAL,
  });
}
