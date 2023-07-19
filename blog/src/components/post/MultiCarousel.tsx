import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const MultiCarousel = ({ children }: { children: React.Node }) => {
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
    <Carousel autoPlay infinite responsive={responsive}>
     {children}
    </Carousel>
  );
};
