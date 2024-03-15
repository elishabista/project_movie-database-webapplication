import { Link } from "react-router-dom";
import Card from "../../../components/Card";
import Carousel from "../../../components/Carousel";
import { useGetTopRatedMovies } from "./home.query";

const TopRated = () => {
  const { data } = useGetTopRatedMovies();

  return (
    <div className="bg-wrapperCard p-2 rounded-3xl mt-6">
      <div className="flex justify-between">
        <h1 className="text-onSurfaceVariant text-center my-4">TOP RATED</h1>
        <Link to={"/top-rated"}>
          <p className="text-white cursor-pointer underline">View All</p>
        </Link>
      </div>

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
            <Carousel.Slide key={item.id} className="max-w-max cursor-pointer">
              <Card item={item} />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </div>
  );
};

export default TopRated;
