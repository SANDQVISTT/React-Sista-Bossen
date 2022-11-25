import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
const MovieInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const GoToMovie = () => {
    navigate("/");
  };
  useEffect(() => {
    if (location.state.movie === null) {
      navigate("/");
    }
  });
  return (
    <ul className="movieInfoDIV">
      <li>
        <h2>{location.state.movie.title}</h2>
        <h2>{location.state.movie.short}</h2>
        <h2>{location.state.movie.long}</h2>
        <img
          src="./images/Fillmurry.jpg"
          alt="fillmurry"
          height="200"
          width="250"
        ></img>
        <br></br>
        <button onClick={() => GoToMovie()}>go back</button>
      </li>
    </ul>
  );
};
export default MovieInfo;
