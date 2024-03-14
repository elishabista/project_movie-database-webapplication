import Card from "../../../components/Card";
import Carousel from "../../../components/Carousel";
import { useGetTopRatedMovies } from "./home.query";

const TopRated = () => {
  const {data}=useGetTopRatedMovies()
  console.log(data, "vv");
  return (
    <div className="bg-wrapperCard p-2">
      <h1 className="text-onSurfaceVariant">TOP RATED</h1>
      <Carousel
        mousewheel
        slidesPerView={'auto'}
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
              <Card item={item}/>
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </div>
  );
};

export default TopRated;
