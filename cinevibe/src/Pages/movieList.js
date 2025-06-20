import { useEffect } from "react";
import {Card} from "../Components/Card"
import useFetch from "../hooks/useFetch";

export const MovieList = ({title , apiPath}) => {
const {data: movies} = useFetch(apiPath);
  useEffect(() => {
      document.title = title
  },[title])
  return (
    <div>
      <main className="movie-list-wrapper">
          <h5 className="page-title-container">{title}</h5>
      </main>
      <div className="row">
        {Array.isArray(movies) && movies.map((movie) => (
            <Card key={movie.id} movie={movie}/>
        ))}
      </div>
    </div>
  );
};

// export default MovieList;
