'use client'

import { usePost } from '@/adapters/useCase/usePost';
interface Props {params:{id:number}}

const PostDetail = ({params:{id}}:Props) => {
  const {data,isLoading,error}= usePost(id)
  if (isLoading||error||!data) return 'loading..'
  return (<div>
    <h2>{data.title}</h2>
    <p>created at : {data.date}</p>
    <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{__html:data.content}}>
    </div>
    <p>original : 
      <a href={`${data.url}/id`}>
      {data.url}+{}
      </a>
      </p>
  </div>);
};
export default PostDetail;
