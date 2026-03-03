import { format, isAfter, isBefore } from 'date-fns';

import { axiosInstance } from '../config/axios.config';
import { FullConferenceDto } from '../types/conference-api.type';
import { parseTime } from '../utils/presentation.utils';

export class ConferenceService {
  static async getConferenceData(): Promise<FullConferenceDto> {
    const response = await axiosInstance.get<FullConferenceDto>('/api/conference/index');
    response.data.presentations = ConferenceService.sortPresentationsByStartDate(response.data);
    ConferenceService.prefixConferenceImages(response.data);
    return response.data;
  }

  private static sortPresentationsByStartDate(conference: FullConferenceDto) {
    return conference.presentations.sort((a, b) => {
      const aStartDate = parseTime(a.startTime);
      const bStartDate = parseTime(b.startTime);
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
    if (!timestamp) return 'n/a';
    if (/^\d{2}:\d{2}$/.test(timestamp)) {
      return timestamp;
    }
    const d = new Date(timestamp);
    if (isNaN(d.getTime())) return 'n/a';

    try {
      return format(d, 'HH:mm');
    } catch {
      return 'n/a';
    }
  }

  static prefixConferenceImages(conference: FullConferenceDto) {
    conference.presentations.forEach((p) => {
      if (p.presenter) {
        p.presenter.pictureUrl = ConferenceService.prefixPresenterImage(p.presenter);
      }
    });
    return conference;
  }

  static prefixPresenterImage(presenter: { pictureUrl: string }) {
    if (presenter.pictureUrl.startsWith('http')) {
      return presenter.pictureUrl;
    }
    return `https://konferencia.simonyi.bme.hu${presenter.pictureUrl}`;
  }
}
