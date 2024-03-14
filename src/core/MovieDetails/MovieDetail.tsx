import { useParams } from "react-router-dom";
import { useGetMovieDetailsById, useGetTrendingMovies } from "./movieDetail.query";
import MovieDetailsLoading from "./MovieDetailsLoading";
import { imageUrlSmall } from "../../constatnts/constants";

const MovieDetail = () => {
  const { id, movieDetails } = useParams();

  const { data, isLoading } = useGetMovieDetailsById(id ?? "");
  const {data:trendingMoviesData,isLoading:trendingLoading} =useGetTrendingMovies()
  console.log(data, trendingMoviesData, movieDetails, "aaa");
  if (isLoading) {
    return <MovieDetailsLoading />;
  }
  return (
    <>
      <div className="p-6">
        <div className="grid grid-cols-3 gap-4">
          <div className=" p-4 col-span-2">
            <img
          src={`${imageUrlSmall}${data?.poster_path}`}
          alt="Movie Image"
          className="object-contain object-center w-full h-[600px]"
        />
          </div>
          <div className="p-4">
          <h1 className="text-white text-center my-6">TRENDING </h1>
        
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
