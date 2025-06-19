import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import download from "../dummy Img/download.png";
import { FaStar, FaUserFriends} from 'react-icons/fa';
import convertMinutes from "../utils/utils"

export const MovieDetails = () => {
  const params = useParams();
  const[movie, setMovie] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}`;
  const image = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : download;
  
    useEffect(() => {
  async function fetchMovies() {
    fetch(url)
      .then((res) => res.json())
      .then((jsonData) => {
        console.log("Fetched movie data:", jsonData);
        setMovie(jsonData);
      })
      .catch((error) => console.error("Error fetching movie data:", error));
  }
  fetchMovies();
}, [url]);


    useEffect(() => {
      document.title = `${movie.title}`
    });
    return (
  <main className="movie-details">
    <div className="movie-layout">
      <div className="poster-section">
        <img src={image} alt="Movie Poster" />
      </div>
      <div className="info-section">
        <h3 className="text-primary">{movie.title}</h3>
        <p className="details-para">{movie.overview}</p>

{movie.genres ? (
  <div className="genre-wrapper">
    {movie.genres.map((genre) => (
      <span className="genre-badge" key={genre.id}>
        {genre.name}
      </span>
    ))}
  </div>
) : ""}
  <div className="movie-rating">
    <span className="movie-detais-star"><FaStar /></span> {movie.vote_average}
    &nbsp;|&nbsp;
    <span className="review-icon"><FaUserFriends /></span> {movie.vote_count} reviews
  </div>

  <table className="movie-table">
  <tbody>
    <tr>
      <th>Runtime</th>
      <td>{convertMinutes(movie.runtime)}</td>
    </tr>
    <tr>
      <th>Budget</th>
      <td>${movie.budget?.toLocaleString()}</td>
    </tr>
    <tr>
      <th>Revenue</th>
      <td>${movie.revenue?.toLocaleString()}</td>
    </tr>
    <tr>
      <th>Release Date</th>
      <td>{movie.release_date}</td>
    </tr>
  </tbody>
</table>
  <a
    target="_blank"
    rel="noopener noreferrer"
    className="imdb-link"
    href={`https://www.imdb.com/title/${movie.imdb_id}/`}
  >
    View on IMDb
  </a>

      </div>
    </div>
  </main>
);

};