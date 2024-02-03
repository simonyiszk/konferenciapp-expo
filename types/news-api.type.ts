export type NewsDto = {
  news: NewsItemDto[];
};

export type NewsItemDto = {
  url: string;
  title: string;
  briefContent: string;
  imageUrl: string;
  highlighted: boolean;
  timestamp: number;
};

export type NewsItemDetailsDto = {
  title: string;
  content: string;
  imageUrl: string;
  timestamp: number;
  ogTitle: string;
  ogImage: string;
  ogDescription: string;
};
