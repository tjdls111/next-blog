import { NewsItem } from '@/type/newsList'
import Image from 'next/image'
import Link from 'next/link'

export const Card = ({
  item: { id, date, title, categoryId },
}: {
  item: NewsItem
}) => {
  //TODO:category id -> name
  //TODO: image
  return (
    <li
      className="p-3 border-1 bg-slate-100 rounded-md w-[200px] h-[200px] overflow-hidden shadow-lg hover:shadow-2xl hover:bg-slate-200"
      key={id}
    >
      <Link
        className="flex x-auto flex-col"
        href={`/post/${id}`}
        target="_blank"
      >
        <Image
          className="w-full"
          src="http://placekitten.com/200/100"
          width="200"
          height="100"
          alt="thumbnail"
        />
        <div className="flex flex-col items-center">
          <p className="text-xs self-end pt-2">{date}</p>
          <p className="font-bold text-sm w-full truncate">{title}</p>
          <span className="text-xs rounded-md my-2 p-1 bg-slate-300">
            {categoryId}
          </span>
        </div>
      </Link>
    </li>
  )
}
