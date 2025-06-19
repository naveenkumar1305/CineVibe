import notFound from "../dummy Img/notFound.jpg";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <img src={notFound} alt="Page Not Found" className="not-found-img" />
      <p className="go-home">
        <Link to="/" className="home-button">Go To Home Page</Link>
      </p>
    </div>
  );
};
