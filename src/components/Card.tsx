import { useNavigate } from "react-router-dom";
import { imageUrlSmall } from "../constatnts/constants";

interface CardProps {
  id: string | number;
  imgSrc: string;
  item: any;
}

const Card = ({ id, imgSrc, item }: CardProps) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="bg-white shadow-md p-4 rounded-lg inline-block max-w-[315px] "
        onClick={() =>
          navigate(`/movie/${id}`, { state: { movieDetails: item } })
        }
      >
        <img
          src={`${imageUrlSmall}${item?.backdrop_path}`}
          alt="Movie Image"
          className="h-64	m-auto"
        />

        <div className="p-4 -0">
          <div className="table w-full">
            <a href="#">
              <h3 className="text-xl	 m-0 table-cell text-left">
                {item?.original_title}
              </h3>
            </a>
            <p className="block text-xs"> {item?.release_date}</p>
            <div className="imax-logo"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
