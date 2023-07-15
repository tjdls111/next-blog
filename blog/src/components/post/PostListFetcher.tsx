'use client'

import { useNewList } from '@/adapters/useCase/useNewList'
import { CardList } from './CardList'

export const List = () => {
  const { data, error, isLoading, size, setSize } = useNewList()

  if (isLoading) return <div>loading...</div>
  if (error || !data) return <div>failed to load</div>
  const modifiedData = data.flat()
  return (
    <>
      <h3 className="font-bold text-lg pl-3">Posts</h3>
      <section className="x-auto">
        <CardList list={modifiedData} />
        <button
          className="py-2 bg-cyan-100 hover:bg-cyan-300 rounded-md"
          onClick={() => setSize(size + 1)}
        >
          Load More!!
        </button>
      </section>
    </>
  )
}
