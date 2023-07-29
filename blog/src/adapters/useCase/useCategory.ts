import { CategoryListResponse } from '@/type/category';
import useSWRInfinite from 'swr/infinite';

const categoryApi = `https://www.tistory.com/apis/category/list?access_token=${process.env.NEXT_PUBLIC_TISTORY_ACCESS_TOKEN}&output=json&blogName=dalseoin`;
const getKey = (pageIndex: number, previousPageData: any) => {
  if (previousPageData && !previousPageData.length) return null; // 끝에 도달
  return `${categoryApi}&page?${pageIndex + 1}`; // SWR 키
};

export const useCategory = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading, size, setSize } =
    useSWRInfinite<CategoryListResponse>(getKey, fetcher);
  console.log('data', data);
  return {
    data: data?.[0]?.tistory?.item?.categories,
    isLoading,
    error,
    size,
    setSize,
  };
};
