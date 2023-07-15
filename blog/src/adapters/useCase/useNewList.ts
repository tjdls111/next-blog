import { NewsList } from '@/type/newsList';
import useSWR from 'swr';
export const useNewList = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  //TODO: api 경로 변경(지금은 hacker news)
  const { data, error, isLoading } = useSWR<NewsList[]>(
    'https://api.hnpwa.com/v0/news/1.json',
    fetcher
  );

  return {
    data,
    isLoading,
    error,
  };
};
