import { useParams } from "react-router-dom";
import {
  useGetMovieDetailsById,
  useGetTrendingMovies,
} from "./movieDetail.query";
import MovieDetailsLoading from "./MovieDetailsLoading";
import { imageUrlSmall } from "../../constatnts/constants";


const MovieDetail = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetMovieDetailsById(id ?? "");
  const { data: trendingMoviesData } =
    useGetTrendingMovies();
  console.log(data);
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
              className="object-cover object-center w-full h-[600px]"
            />

            <a
              href="#"
              className="flex flex-col items-center  border border-surface rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-surface dark:bg-surface dark:hover:bg-gray-700 mt-14 w-full"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={`${imageUrlSmall}${data?.poster_path}`}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data?.original_title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {data?.overview}
                </p>

               
                <div className="flex mt-2">
                <p className="text-white mr-4 text-sm	"> Production Countries:</p>
                  {data?.genres?.map((item) => {
                    return (
                      <span
                        className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                        key={item?.id}
                      >
                        {item?.name}
                      </span>
                    );
                  })}
                </div>
                <div className="flex ">
                <span className="text-white mt-1 text-xs mr-3">
                  Vote Count: {data?.vote_count}
                </span>
                <span className="text-white mt-1 text-xs">
                  Status: {data?.status}
                </span>
                </div>
                <p className="mt-2 text-white text-xs"> Release Date: {data?.release_date}</p>
                <p className="mt-2 text-white text-xs"> Can be seen By: {data?.adult ? "Adult":"All"}</p>
                
                
              </div>
            </a>
          </div>
          <div className="bg-wrapperCard p-2 rounded-3xl ">
            <h1 className="text-onSurfaceVariant text-center mb-2">
              TRENDING
            </h1>
            {trendingMoviesData?.results?.slice(0, 3)?.map((item) => {
              return (
                <div className="bg-surface shadow-md p-4 rounded-lg inline-block w-full hover:cursor-pointer">
                  <img
                    src={`${imageUrlSmall}${item?.poster_path}`}
                    alt="Movie Image"
                    className="h-64	m-auto"
                  />

                  <div className="p-4 -0">
                    <div className="table w-full">
                      <h3 className="text-xl	 m-0 table-cell text-left text-onSurfaceVariant">
                        {item?.original_title}
                      </h3>

                      <p className="block text-xs text-onSurfaceVariant">
                        {" "}
                        {item?.release_date}
                      </p>
                      
                  
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
