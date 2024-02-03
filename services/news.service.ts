import { axiosInstance } from '../config/axios.config';
import { NewsDto, NewsItemDetailsDto, NewsItemDto } from '../types/news-api.type';

export class NewsService {
  static async getNewsData(): Promise<NewsDto> {
    const response = await axiosInstance.get<NewsDto>('/api/news');
    response.data.news = NewsService.sortNewsByTimestamp(response.data.news);
    return response.data;
  }

  static async getNewsItemData(id: string): Promise<NewsItemDetailsDto> {
    const response = await axiosInstance.get<NewsItemDetailsDto>(`/api/news/${id}`);
    return response.data;
  }

  private static sortNewsByTimestamp(news: NewsItemDto[]) {
    return news.sort((a, b) => b.timestamp - a.timestamp);
  }
}
