import { NewsList } from '@/type/newsList'
import useSWRInfinite from 'swr/infinite'

const getKey = (pageIndex: number, previousPageData: any) => {
  if (previousPageData && !previousPageData.length) return null // 끝에 도달
  return `https://api.hnpwa.com/v0/news/${pageIndex + 1}.json` // SWR 키
}

export const useNewList = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  //TODO: api 경로 변경(지금은 hacker news)
  const { data, error, isLoading, size, setSize } = useSWRInfinite<NewsList[]>(
    getKey,
    fetcher
  )

  return {
    data,
    isLoading,
    error,
    size,
    setSize,
  }
}
