import { useNavigate } from "react-router-dom";
import { imageUrlSmall } from "../constatnts/constants";
import { Result } from "../core/HomePage/Components/home.schema";

interface CardProps {
  item: Result;
}

const Card = ({ item }: CardProps) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="bg-surface shadow-md p-4 rounded-lg inline-block w-[260px] hover:cursor-pointer overflow-hidden"
        onClick={() =>
          navigate(`/movie/${item?.id}`, { state: { movieDetails: item } })
        }
      >
        <img
          src={`${imageUrlSmall}${item?.poster_path ?? item?.backdrop_path}`}
          alt="Movie Image"
          className="h-64	m-auto"
        />

        <div className="p-4 -0">
          {/* <div className="table w-full"> */}
           
              <h3 className="text-xl	 m-0 table-cell text-left text-onSurfaceVariant whitespace-nowrap ">
                {item?.original_title}
              </h3>
          
            <p className="block text-xs text-onSurfaceVariant"> {item?.release_date}</p>
          
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Card;
