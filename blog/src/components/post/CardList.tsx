import { NewsList } from '@/type/newsList'
import { Card } from './Card'

export const CardList = ({ list }: { list: NewsList[] }) => {
  return (
    <ul className="my-4 grid gap-y-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {list.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </ul>
  )
}
