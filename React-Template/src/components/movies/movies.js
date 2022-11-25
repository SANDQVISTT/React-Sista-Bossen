import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DisplayMoviecard from "./rendera";
const Movies = (event) => {
  const [data, setData] = useState(
    localStorage.getItem("movies")
      ? JSON.parse(localStorage.getItem("movies"))
      : []
  );
  const navigate = useNavigate();
  const location = useLocation();
  const goToMovie = () => {
    if (localStorage.getItem("inlogg")) {
      navigate("/addMovie");
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    if (location.state) {
      setData(location.state.movies);
    }
  }, []);
  return (
    <div>
      <div className="StartSida">
        <h1> Welcome To Grit Movies! </h1>
        <h1>NEW MOVIES</h1>
        <div className="StartsidaBTN">
        <button onClick={() => goToMovie()}>Add Movie</button>
        </div>
      </div>
      <div className="moviesContainerDIV">
        <DisplayMoviecard data={data} />
      </div>
    </div>
  );
};
export default Movies;