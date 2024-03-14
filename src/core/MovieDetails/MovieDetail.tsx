import React from "react";
import { useParams } from "react-router-dom";
import { useGetMovieDetailsById } from "./movieDetail.query";
import MovieDetailsLoading from "./MovieDetailsLoading";

const MovieDetail = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetMovieDetailsById(id ?? "");
  console.log(data, isLoading);
  if (isLoading) {
    return <MovieDetailsLoading />;
  }
  return <div>MovieDetail {id}</div>;
};

export default MovieDetail;
