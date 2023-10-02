'use client'

import { usePost } from '@/adapters/useCase/usePost';
import React from 'react';

const PostDetail = () => {
  const {data,isLoading,error}= usePost()
  if (isLoading||error) return 'loading..'
  return <div>
    <h2>{data.title}</h2>
    <p>created at : {data.date}</p>
    <pre>
      {data.content}
    </pre>
    <p>original : 
      <a href={`${data.url}/id`}>
      {data.url}+{}
      </a>
      </p>
  </div>;
};
export default PostDetail;
