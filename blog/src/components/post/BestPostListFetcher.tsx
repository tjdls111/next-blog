'use client';

import { useNewList } from '@/adapters/useCase/useNewList';
import { MultiCarousel } from './MultiCarousel';
import { Card } from './Card';

export const BestPostList = () => {
  //TODO : Best post 만 가져오기
  const { data, error, isLoading, size, setSize } = useNewList();

  if (isLoading) return <div>loading...</div>;
  if (error || !data) return <div>failed to load</div>;
  return (
    <>
      <h3 className="font-bold text-lg pl-3">Best Posts</h3>
      <section className="x-auto">
        <MultiCarousel>
          {data
            .map((item) => <Card key={item.id} item={item} />)}
        </MultiCarousel>
      </section>
    </>
  );
};
