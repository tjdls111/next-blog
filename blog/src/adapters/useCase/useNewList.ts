import { NewsList } from '@/type/newsList';
import useSWRInfinite from 'swr/infinite';

const listApi = `https://www.tistory.com/apis/post/list?access_token=${process.env.NEXT_PUBLIC_TISTORY_ACCESS_TOKEN}&output=json&blogName=snrnsidy`;
const getKey = (pageIndex: number, previousPageData: any) => {
  if (previousPageData && !previousPageData.length) return null; // 끝에 도달
  return `${listApi}&page?${pageIndex + 1}`; // SWR 키
};

export const useNewList = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  //TODO - data 잘 정리.. 타입!
  const { data, error, isLoading, size, setSize } = useSWRInfinite<NewsList>(
    getKey,
    fetcher
  );
  console.log('data', data);
  return {
    data: data?.[0]?.tistory?.item?.posts,
    isLoading,
    error,
    size,
    setSize,
  };
};
