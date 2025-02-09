import { useQuery } from '@tanstack/react-query';
import { useFeatureFlag } from 'posthog-react-native';

import { ConferenceService } from '../services/conference.service';
import { MockConferenceService } from '../services/mock-conference.service';

const REFRESH_INTERVAL = 1000 * 60; // 1 minute

export function useConference() {
  const mockEnabled = useFeatureFlag('mock_data');
  return useQuery({
    queryKey: ['conference'],
    queryFn: mockEnabled ? MockConferenceService.getConferenceData : ConferenceService.getConferenceData,
    refetchInterval: REFRESH_INTERVAL,
  });
}
