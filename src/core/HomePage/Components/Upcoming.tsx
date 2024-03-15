import { useGetUpcomingMovies } from "./home.query";
import Carousel from "../../../components/Carousel";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";

const Upcoming = () => {
  const { data } = useGetUpcomingMovies();
  console.log(data, "upcoming");
  return (
    <div className="bg-wrapperCard rounded-3xl mt-6">
      <div className="flex justify-between">
        <h1 className="text-onSurfaceVariant text-center my-4">
          UPCOMING MOVIE
        </h1>
        <Link to={"/upcoming-movies"}>
          <p className="text-white cursor-pointer underline">View All</p>
        </Link>
      </div>{" "}
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

export default Upcoming;
