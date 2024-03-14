import { useParams } from "react-router-dom";
import { useGetMovieDetailsById } from "./movieDetail.query";
import MovieDetailsLoading from "./MovieDetailsLoading";
import movieImg from "../../assets/img/movie.jpg";

const MovieDetail = () => {
  const { id, movieDetails } = useParams();

  const { data, isLoading } = useGetMovieDetailsById(id ?? "");
  console.log(data, isLoading, movieDetails, "aaa");
  if (isLoading) {
    return <MovieDetailsLoading />;
  }
  return (
    <div
      className="bg-cover bg-center h-[630px]"
      style={{ backgroundImage: `url(${movieImg})` }}
    >
<div className="movie-content ml-8 pt-10">

<p>dnvfdk</p>
</div>
    </div>
  );
};

export default MovieDetail;
