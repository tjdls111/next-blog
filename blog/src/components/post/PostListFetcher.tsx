'use client'
import { useState } from 'react'
import { useCategory } from '@/adapters/useCase/useCategory'
import { useNewList } from '@/adapters/useCase/useNewList'
import { CardList } from './CardList'

export const List = () => {
  const { data, error, isLoading, size, setSize } = useNewList()
  const categoryList = useCategory()
  const [activeCategoryId,setActiveCategoryId] = useState<number|null>(null)

  if (isLoading) return <div>loading...</div>
  if (error || !data) return <div>failed to load</div>
  const modifiedData = data.flat()


  return (
    <>
      <h3 className="font-bold text-lg pl-3">Posts</h3>
      <div className="flex gap-5">
      <section className="x-auto">
        <CardList list={modifiedData.filter((data)=> data.categoryId === activeCategoryId)} />
        <button
          className="py-2 bg-cyan-100 hover:bg-cyan-300 rounded-md"
          onClick={() => setSize(size + 1)}
          >
          Load More!!
        </button>
      </section>
        {
        categoryList.data && 
        
      (<section>
        <ul>
          {categoryList.data.map((category)=>(
            <li key={category.id} onClick={()=>setActiveCategoryId(category.id)}>{category.name}</li>
          ))}
          </ul>
        </section>)}
      </div>
    </>
  )
}
