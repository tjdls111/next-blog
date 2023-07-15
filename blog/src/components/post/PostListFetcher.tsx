'use client'
import Link from 'next/link'

import { useNewList } from '@/adapters/useCase/useNewList'

export const List = () => {
  const { data, error, isLoading, size, setSize } = useNewList()

  if (isLoading) return <div>loading...</div>
  if (error || !data) return <div>failed to load</div>
  return (
    <section className="flex flex-col justify-center">
      <ul className="my-4">
        {data.map((items, index) => {
          return items.map((item) => (
            <li
              className="p-3 bg-slate-100 rounded-md hover:bg-slate-300"
              key={item.id}
            >
              <Link href={item.url} target="_blank">
                {item.title} ({item.time_ago})
              </Link>
            </li>
          ))
        })}
      </ul>
      <button
        className="py-2 bg-cyan-100 hover:bg-cyan-300 rounded-md"
        onClick={() => setSize(size + 1)}
      >
        Load More
      </button>
    </section>
  )
}
