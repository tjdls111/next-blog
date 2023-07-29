export interface NewsItem {
  categoryId: number;
  comments: number;
  date: string;
  id: number;
  postUrl: string;
  title: string;
  trackbacks: number;
  visibility: number;
}
export interface NewsList {
  tistory: {
    item: {
      posts: NewsItem[];
    };
  };
}
