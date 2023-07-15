import { NewsList } from '@/type/newsList'
import Image from 'next/image'
import Link from 'next/link'

export const Card = ({ item }: { item: NewsList }) => {
  return (
    <li
      className="p-3 border-1 border-slate-100 rounded-md w-[200px] h-[200px]"
      key={item.id}
    >
      <Link className="flex x-auto flex-col" href={item.url} target="_blank">
        <Image
          src="http://placekitten.com/200/100"
          width="200"
          height="100"
          alt="thumbnail"
        />
        <p className="text-xs text-right pt-2">{item.time_ago}</p>
        <p className="text-bold text-sm">{item.title}</p>
        <span className="text-xs rounded-md my-2 p-1 bg-slate-300 text-center">
          {item.domain}
        </span>
      </Link>
    </li>
  )
}
