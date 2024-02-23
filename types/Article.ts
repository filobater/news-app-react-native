export type ArticleType = {
  bookmarked?: boolean;
  url?: string;
  urlToImage: string;
  author: string;
  title: string;
  publishedAt: string;
  content: string;
  description: string;
  source?: {
    name: string;
  };
};
