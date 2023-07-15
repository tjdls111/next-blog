'use client'

import { useNewList } from '@/adapters/useCase/useNewList'
import { CardList } from './CardList'

export const BestPostList = () => {
  //TODO : Best post 만 가져오기
  const { data, error, isLoading, size, setSize } = useNewList()

  if (isLoading) return <div>loading...</div>
  if (error || !data) return <div>failed to load</div>
  return (
    <>
      <h3 className="text-bold text-lg pl-3">Best Posts</h3>
      <section className="x-auto">
        <CardList list={data} />
      </section>
    </>
  )
}
