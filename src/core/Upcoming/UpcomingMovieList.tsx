import  { useState } from 'react'
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';
import { useGetUpcomingMovies } from '../HomePage/Components/home.query';
import Spinner from '../../components/Spinner';

const UpcomingMovieList = () => {
    const [currentPage, setCurrentPage] = useState(1)
  const { data,isLoading } = useGetUpcomingMovies(currentPage);
  return (
    <div className="bg-wrapperCard p-2 rounded-3xl mt-6">
    <h1 className="text-onSurfaceVariant text-center my-4">UPCOMING MOVIE</h1>
    {isLoading ? (
        <Spinner />
      ) : (
        <>
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
          <div className="flex align-items gap-6 flex-wrap">
            {data?.results?.map((item) => {
              return <Card key={item.id} item={item} />;
            })}
          </div>
        </>
      )}
  </div>
  )
}

export default UpcomingMovieList