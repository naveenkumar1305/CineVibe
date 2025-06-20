import { MovieList } from "../Pages";
import { MovieDetails } from "../Pages";
import { PageNotFound } from "../Pages";
import {Route , Routes} from "react-router-dom"
import { Search } from "../Pages";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MovieList title="Your Guide to Great Movies" apiPath = "movie/now_playing"/>} />
            <Route path="movies/popular" element={<MovieList title="Popular Movies" apiPath = "movie/popular"/>} />
            <Route path="movies/upcoming" element={<MovieList title="Upcoming Movies" apiPath = "movie/upcoming"/>} />
            <Route path="movie/:id" element={<MovieDetails title= "No Title" />} />
            <Route path="search" element ={<Search apiPath ="search/movie" />} />
            <Route path="*" element={<PageNotFound />} />

        </Routes>
    );
};

export default AllRoutes;
