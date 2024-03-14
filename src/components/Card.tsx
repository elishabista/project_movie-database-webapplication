import { useNavigate } from "react-router-dom";
import { imageUrlSmall } from "../constatnts/constants";
import { Result } from "../core/HomePage/Components/home.schema";

interface CardProps {
  item: Result;
}

const Card = ({  item }: CardProps) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="bg-surface shadow-md p-4 rounded-lg inline-block max-w-[315px] "
        onClick={() =>
          navigate(`/movie/${item?.id}`, { state: { movieDetails: item } })
        }
      >
        <img
          src={`${imageUrlSmall}${item?.poster_path}`}
          alt="Movie Image"
          className="h-64	m-auto"
        />

        <div className="p-4 -0">
          <div className="table w-full">
            <a href="#">
              <h3 className="text-xl	 m-0 table-cell text-left text-onSurfaceVariant">
                {item?.original_title}
              </h3>
            </a>
            <p className="block text-xs text-onSurfaceVariant"> {item?.release_date}</p>
            <div className="imax-logo"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
