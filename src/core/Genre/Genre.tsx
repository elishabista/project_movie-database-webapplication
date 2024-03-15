import React, { useEffect, useState } from "react";
import { useDiscoverMovies, useGetGenreList } from "./genre.query";
import Spinner from "../../components/Spinner";
import Pagination from "../../components/Pagination";
import Card from "../../components/Card";

const Genre = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<number[]>([]);
  const [selectedSorting, setSelectedSorting] = useState("");
  const toggleGenre = (id: number) => {
    if (selectedGenre.includes(id)) {
      setSelectedGenre(selectedGenre.filter((genreId) => genreId !== id));
    } else {
      setSelectedGenre([...selectedGenre, id]);
    }
  };

  const { data, isLoading } = useDiscoverMovies({
    page: currentPage,
    ...(selectedGenre.length?{with_genres: selectedGenre.join()}:{}),
    ...(selectedSorting?{sort_by: selectedSorting}:{})
  });
  const { data: genreList } = useGetGenreList();

  useEffect(() => {
    if (data?.total_pages && currentPage > data?.total_pages) {
      setCurrentPage(data?.total_pages);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const options = [
    { label: "Select Option", value: "" },
    { label: "Popularity ascending", value: "popularity.asc" },
    { label: "Popularity descending", value: "popularity.desc" },
    { label: "Date ascending", value: "primary_release_date.asc" },
    { label: "Date descending", value: "primary_release_date.desc" },
    { label: "Vote ascending", value: "vote_average.asc" },
    { label: "Vote descending", value: "vote_average.desc" },
  ];

  return (
    <div className="bg-wrapperCard p-2 rounded-3xl mt-6">
      <h1 className="text-onSurfaceVariant text-2xl text-center my-4">Genre</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {genreList?.genres.map((item) => {
          return (
            <div
              key={item.id}
              className={`${
                selectedGenre.includes(item.id) ? "bg-primary" : "bg-yellow-300"
              } rounded-3xl py-2 px-4 cursor-pointer`}
              onClick={() => toggleGenre(item.id)}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <form className="max-w-sm mt-4">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Sort by
        </label>
        <select
          id="countries"
          onChange={(event) => {
            setSelectedSorting(event.target.value);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {options.map((item) => {
            return <option value={item.value}>{item.label}</option>;
          })}
        </select>
      </form>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {data?.results?.length ? (
            <>
              <Pagination
                currentPage={currentPage}
                totalPages={data.total_pages}
                totalRecords={data.total_results}
                gotoPage={(num: number) => {
                  setCurrentPage(num);
                }}
              />
              <div className="flex align-items gap-6 flex-wrap">
                {data?.results?.map((item) => {
                  return <Card key={item.id} item={item} />;
                })}
              </div>
            </>
          ) : (
            <div className="text-center w-full my-20">
              <h6 className="text-onSurfaceVariant">
                No Results found for selected Genre
              </h6>
              <h6 className="text-onSurfaceVariant">
                Please unselect some genres and try again
              </h6>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Genre;
