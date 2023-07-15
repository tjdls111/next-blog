'use client'

import { useNewList } from '@/adapters/useCase/useNewList'
import { Card } from './Card'

export const List = () => {
  const { data, error, isLoading, size, setSize } = useNewList()

  if (isLoading) return <div>loading...</div>
  if (error || !data) return <div>failed to load</div>
  return (
    <>
      <h3 className="text-bold text-lg pl-3">Posts</h3>
      <section className="x-auto">
        <ul className="my-4 flex flex-wrap gap-2">
          {data.map((items, index) => {
            return items.map((item) => <Card key={item.id} item={item} />)
          })}
        </ul>
        <button
          className="py-2 bg-cyan-100 hover:bg-cyan-300 rounded-md"
          onClick={() => setSize(size + 1)}
        >
          Load More
        </button>
      </section>
    </>
  )
}
