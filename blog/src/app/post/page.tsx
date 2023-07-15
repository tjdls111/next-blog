'use client'
import { useNewList } from '@/adapters/useCase/useNewList'
import Link from 'next/link'
import React from 'react'

const PostList = () => {
  const { data, error, isLoading, size, setSize } = useNewList()

  if (isLoading) return <div>loading...</div>
  if (error || !data) return <div>failed to load</div>
  return (
    <>
      <ul>
        {data.map((items, index) => {
          return items.map((item) => (
            <li key={item.id}>
              <Link href={item.url} target="_blank">
                {item.title} ({item.time_ago})
              </Link>
            </li>
          ))
        })}
      </ul>
      <button onClick={() => setSize(size + 1)}>Load More</button>
    </>
  )
}
export default PostList
