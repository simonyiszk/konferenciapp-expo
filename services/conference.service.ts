import { axiosInstance } from '../config/axios.config';
import { FullConferenceDto } from '../types/conference-api.type';

export class ConferenceService {
  static async getConferenceData(): Promise<FullConferenceDto> {
    const response = await axiosInstance.get<FullConferenceDto>('/api/conference/index');
    return response.data;
  }
}
