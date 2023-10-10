'use client'

import { usePost } from '@/adapters/useCase/usePost';
interface Props {params:{id:number}}
import { BsFillCalendarDayFill } from "react-icons/bs";

const PostDetail = ({params:{id}}:Props) => {
  const {data,isLoading,error}= usePost(id)
  if (isLoading||error||!data) return 'loading..'
  return (
  <article className="px-6">
    <h2 className="text-2xl font-bold mt-3">{data.title}</h2>
    <div className="flex items-center gap-3 mt-2"><BsFillCalendarDayFill/> created at : {data.date}</div>
    <hr className="my-3"/>
    <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{__html:data.content}}>
    </div>
    <p>original site : 
      <a target="_blank" href={`${data.url}/${id}`}>
      {data.url}/{id}
      </a>
      </p>
  </article>);
};
export default PostDetail;
