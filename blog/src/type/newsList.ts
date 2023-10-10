export interface NewsItem {
  categoryId: string;
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
