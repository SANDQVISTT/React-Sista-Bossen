import { useNavigate } from "react-router-dom";
const MovieCard = (props) => {
  const navigate = useNavigate();
  const GoToMovieInfo = () => {
    navigate("/movies/"+props.value.title, { state: { movie: props.value } });
  };
  return (
    <ul className="moviesDIV">
      <li>
        <h4>{props.value.title} </h4>
        <img
          src="./images/Fillmurry.jpg"
          alt="fillmurry"
          height="200"
          width="250"
        ></img>
        <br></br>
        <button onClick={() => GoToMovieInfo()}>show more info</button>
      </li>
    </ul>
  );
};
export default MovieCard;
