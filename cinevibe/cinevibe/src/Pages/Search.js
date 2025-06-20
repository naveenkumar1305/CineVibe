import { useEffect } from "react";
import {Cart} from "../Components/Cart"
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

export const Search = ({ apiPath }) => {
  const [searchParams ] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const {data: movies} = useFetch(apiPath , queryTerm);

  useEffect(() =>{
    document.title = `Search result for ${queryTerm}`
  })
  return (
    <main>
      <h5 className="search-title">
          {movies.length === 0 ? `No result found for ${queryTerm}` : `Result for ${queryTerm}`}
      </h5>
      <div className="row">
        {Array.isArray(movies) && movies.map((movie) => (
            <Cart key={movie.id} movie={movie}/>
        ))}
      </div>
    </main>
  )
}
