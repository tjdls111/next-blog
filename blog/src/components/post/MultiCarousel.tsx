import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card } from './Card';
import { NewsList } from '@/type/newsList';

export const MultiCarousel = ({ list }: { list: NewsList[] }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <Carousel autoPlay rewind responsive={responsive}>
      {list.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </Carousel>
  );
};
