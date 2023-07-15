'use client';
import { useNewList } from '@/adapters/useCase/useNewList';
import Link from 'next/link';
import React from 'react';

const PostList = () => {
  const { data, error, isLoading } = useNewList();

  if (isLoading) return <div>loading...</div>;
  if (error || !data) return <div>failed to load</div>;
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <Link href={item.url} target="_blank">
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default PostList;
