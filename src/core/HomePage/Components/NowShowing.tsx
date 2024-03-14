import { useGetNowPlayingMovies } from "./home.query";
import Carousel from "../../../components/Carousel";
import { useNavigate } from "react-router-dom";
import { imageUrl } from "../../../constatnts/constants";

const NowShowing = () => {
  const { data } = useGetNowPlayingMovies();
  const navigate=useNavigate()
  return (
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
            <Carousel.Slide key={item.id} className="w-full">
              <div
                className="bg-surface shadow-md rounded-lg inline-block w-full cursor-pointer relative"
                onClick={() =>
                  navigate(`/movie/${item?.id}`, {
                    state: { movieDetails: item },
                  })
                }
              >
                <img
                  src={`${imageUrl}${item?.backdrop_path}`}
                  alt="Movie Image"
                  className="h-96 md:[432px] xl:h-[512px] w-full object-cover"
                />

                <div className="absolute text-center top-1/2 -translate-y-10 w-full md:w-1/2  px-4 md:px-10">
                      <h3 className="text-5xl  text-white z-999">
                        {item?.original_title}
                      </h3>
                    <p className="block text-xs text-white z-999 mt-4">
                      {item?.release_date}
                    </p>
                    <p className="block text-xs text-white z-999mt-4">
                      {item?.overview}
                    </p>
                </div>
              </div>
            </Carousel.Slide>
          );
        })}
      </Carousel>
  );
};

export default NowShowing;