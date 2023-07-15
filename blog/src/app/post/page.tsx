import React from 'react';
import useSWR from 'swr';

const PostList = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR('/api/user/123', fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <div>PostList</div>;
};
export default PostList;
