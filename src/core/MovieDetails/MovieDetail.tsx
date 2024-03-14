import { useParams } from "react-router-dom";
import { useGetMovieDetailsById } from "./movieDetail.query";
import MovieDetailsLoading from "./MovieDetailsLoading";

const MovieDetail = () => {
  const { id ,movieDetails} = useParams();

  const { data, isLoading } = useGetMovieDetailsById(id ?? "");
  console.log(data, isLoading,movieDetails,'aaa');
  if (isLoading) {
    return <MovieDetailsLoading />;
  }
  return <div>MovieDetail {id}</div>;
};

export default MovieDetail;
