import Card from "../../../components/Card";
import { useGetTopRatedMovies } from "../../MovieDetails/movieDetail.query";

const TopRated = () => {
  const { data } = useGetTopRatedMovies();
  console.log(data?.results, "moviedata");
  return (
    <>
      <h2 className="text-center font-semibold mt-6 text-xl">TOP RATED MOVIES</h2>
      {data?.results?.map((item: any) => {
        return (
       
          <Card
            id={278}
            imgSrc="/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg"
            item={item}
          />
   
        );
      })}
  

    </>
  );
};

export default TopRated;
