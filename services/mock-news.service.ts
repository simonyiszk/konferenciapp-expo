import { NewsDto, NewsItemDetailsDto, NewsItemDto } from '../types/news-api.type';
import { NewsService } from './news.service';

export class MockNewsService implements NewsService {
  private static readonly NewsMock: NewsItemDetailsDto = {
    title: 'Új app frissítés',
    content: 'A TEDxBME rendezvényre frissítettük a KonferenciApp-ot.',
    imageUrl: 'https://example.com/images/news/1.jpg',
    timestamp: new Date().getTime(),
    ogTitle: '',
    ogImage: '',
    ogDescription: '',
  };

  static async getNewsData(): Promise<NewsDto> {
    return {
      news: [
        {
          title: 'Új app frissítés',
          imageUrl: 'https://example.com/images/news/1.jpg',
          timestamp: new Date().getTime(),
          url: 'https://example.com/news/1',
          briefContent: 'A TEDxBME rendezvényre frissítettük a KonferenciApp-ot.',
          highlighted: true,
        },
      ],
    };
  }

  static async getNewsItemData(): Promise<NewsItemDetailsDto> {
    return MockNewsService.NewsMock;
  }

  private static sortNewsByTimestamp(news: NewsItemDto[]) {
    return news.sort((a, b) => b.timestamp - a.timestamp);
  }

  private static convertTimestamp(news: NewsItemDto[]) {
    return news.map((item) => {
      item.timestamp = item.timestamp * 1000;
      return item;
    });
  }
}
