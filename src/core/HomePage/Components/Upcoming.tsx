import { useGetUpcomingMovies } from './home.query';
import Carousel from '../../../components/Carousel';
import Card from '../../../components/Card';

const Upcoming = () => {
  const {data}=useGetUpcomingMovies()
  console.log(data, "upcoming");
  return (
    <div className="bg-wrapperCard p-2">
    <h1 className="text-onSurfaceVariant text-center my-6">UPCOMING MOVIE </h1>
    <Carousel
      mousewheel
      slidesPerView={"auto"}
      grabCursor
      spaceBetween={8}
      freeMode
      navigation
      pagination={{ clickable: true }}
      autoplay
    >
      {data?.results?.map((item) => {
        return (
          <Carousel.Slide key={item.id} className="max-w-max">
            <Card item={item} />
          </Carousel.Slide>
        );
      })}
    </Carousel>
  </div>
  )
}

export default Upcoming