import { NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
  // You use useNavigate inside JavaScript code when you want to send the user to another page after something happens — like clicking a button.
  const navigator = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    const queryTerm = e.target.search.value;
    e.target.reset();
    return navigator(`/search?q=${queryTerm}`);
  };

  return (
    <div className="page-wrapper">
      <h1>CINE-VIBE</h1>
      <div className="nav-tabs">
        {/* It’s just like an anchor tag (<a href>), but it doesn’t reload the page — it changes the page smoothly using React Router. */}
        <NavLink to="/" end className="nav-item">Home</NavLink>
        <NavLink to="/movies/popular" className="nav-item">Popular</NavLink>
        <NavLink to="/movies/upcoming" className="nav-item">UpComing</NavLink>
      </div>

      <form className="search-section" onSubmit={handleSearch}>
        <input type="text" placeholder="Search For a Movies" name="search" />
        <button>Search</button>
      </form>
    </div>
  );
};
