import download from "../dummy Img/download.png"
import { Link } from "react-router-dom"
import { FaStar, FaUserFriends } from "react-icons/fa";


export const Cart = ({movie}) => {
  //this are the data that are taken from thee json file(https://api.themoviedb.org/3/movie/now_playing?api_key=d69e32d542fac261ff941276a2ddccd2) 
  //check the file that we are taking teh required from the file backdrop_path , id, poster_path, overview , 

  const { id, title , poster_path, overview , vote_average, vote_count} = movie;

  const image = poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : download;
  return (
    <div className="col">
      <div className="card" title={title}>
        <img src={image} alt={title} className="movie-poster" />
        <div className="card-body">
          <h5 className="movie-title">{title}</h5>
          <p className="movie-paragraph">
            {overview}
          </p>
          <div>
            <Link to={`/movie/${id}`} className="read-more-button">Read More</Link>
            <small className="movie-review">
              <span className="star"><FaStar /></span> {vote_average}
              &nbsp;|&nbsp;
              <span className="review-icon"><FaUserFriends /></span> {vote_count} reviews
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
