import { format, isAfter, isBefore } from 'date-fns';

import { axiosInstance } from '../config/axios.config';
import { FullConferenceDto } from '../types/conference-api.type';

export class ConferenceService {
  static async getConferenceData(): Promise<FullConferenceDto> {
    const response = await axiosInstance.get<FullConferenceDto>('/api/conference/index');
    response.data.presentations = ConferenceService.sortPresentationsByStartDate(response.data);
    return response.data;
  }

  private static sortPresentationsByStartDate(conference: FullConferenceDto) {
    return conference.presentations.sort((a, b) => {
      const aStartDate = new Date(a.startTime);
      const bStartDate = new Date(b.startTime);
      if (isBefore(aStartDate, bStartDate)) {
        return -1;
      }
      if (isAfter(aStartDate, bStartDate)) {
        return 1;
      }
      return 0;
    });
  }

  static getFormattedTimestamp(timestamp: string) {
    try {
      return format(new Date(timestamp), 'HH:mm');
    } catch {
      return 'n/a';
    }
  }
}
