import { useState } from "react";
import Card from "../../components/Card";
import { useGetTopRatedMovies } from "../HomePage/Components/home.query";
import Pagination from "../../components/Pagination";

const TopRatedListAll = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data } = useGetTopRatedMovies(currentPage);

  return (
    <div className="bg-wrapperCard p-2 rounded-3xl mt-6">
      <h1 className="text-onSurfaceVariant text-center my-4">TOP RATED</h1>
      <div className="flex align-items gap-6 flex-wrap">
      {data?.results?.map((item) => {
        return <Card key={item.id} item={item} />;
      })}
      </div>
      {data && (
        <Pagination
          currentPage={currentPage}
          totalPages={data.total_pages}
          totalRecords={data.total_results}
          gotoPage={(num: number) => {
            setCurrentPage(num);
          }}
        />
      )}
    </div>
  );
};

export default TopRatedListAll;