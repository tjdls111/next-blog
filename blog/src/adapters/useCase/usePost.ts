import { PostResponse } from '@/type/post';
import useSWR from 'swr'

const categoryApi = `https://www.tistory.com/apis/post/read?access_token=${process.env.NEXT_PUBLIC_TISTORY_ACCESS_TOKEN}&blogName=snrnsidy&postId=122&output=json`;

export const usePost = () => {

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading, } =
  useSWR<PostResponse>(categoryApi, fetcher);
  return {
    data: data?.tistory.item,
    isLoading,
    error,
  };
};
