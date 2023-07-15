import Profile from '@/components/home/Profile'
import { BestPostList } from '@/components/post/BestPostListFetcher'

export default function Home() {
  return (
    <>
      <Profile />
      <BestPostList />
    </>
  )
}
