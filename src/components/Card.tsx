import MovieImg from "../assets/img/movie.jpg";

const Card = () => {
  return (
    <div className="flex gap-3">
    <div>
        <img src={MovieImg} alt="Movie Image" className="h-64	"/>
        <p className="font-bold text-left">McGraw Avenue</p>
        <p className="text-left">2020</p>
    </div>
    <div>
        <img src={MovieImg} alt="Movie Image" className="h-64	"/>
        <p className="font-bold text-left">McGraw Avenue</p>
        <p className="text-left">2020</p>
    </div>
    <div>
        <img src={MovieImg} alt="Movie Image" className="h-64	"/>
        <p className="font-bold text-left" >McGraw Avenue</p>
        <p className="text-left">2020</p>
    </div>
    </div>
  )
}

export default Card