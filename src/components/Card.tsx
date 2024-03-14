import { useNavigate } from "react-router-dom";
import { imageUrlSmall } from "../constatnts/constants";

interface CardProps {
  id:string|number
  imgSrc:string
}

const Card = ({id,imgSrc}:CardProps) => {
  const navigate = useNavigate()
  return (
    <>
      <div className="bg-white shadow-md p-4 rounded-lg inline-block max-w-[315px] my-8" onClick={()=>navigate(`movie/${id}`)}>
      <img src={`${imageUrlSmall}${imgSrc}`} alt="Movie Image" className="h-64	"/>

        <div className="p-0 m-0 h-96	 w-full block rounded-xl bg-cover bg-bottom bg-right" style={{ backgroundImage: 'url("https://static0.colliderimages.com/wordpress/wp-content/uploads/2017/05/blade-runner-2049-poster-ryan-gosling.jpeg")' }}>
          {/* <div className="header-icon-container">
            <a href="#">
              <i className="material-icons header-icon"></i>
            </a>
          </div> */}
        </div>
        <div className="p-4 -0">
          <div className="table w-full">
            <a href="#">
              <h3 className="text-2xl	 m-0 table-cell text-left">Blade Runner 2049</h3>
            </a>
            <div className="imax-logo"></div>
          </div>     
        </div>
      </div>  
    </>
  );
};

export default Card;
