import React from "react";
import { useNavigate } from "react-router-dom";
const Addmovie = () => {
  const navi = useNavigate();
  const subButton = (event) => {
    event.preventDefault();
    const movieList = {
      title: event.target.children[0].value,
      short: event.target.children[1].value,
      long: event.target.children[2].value,
    };
    const movies = localStorage.getItem("movies")
      ? JSON.parse(localStorage.getItem("movies"))
      : [];
    movies.push(movieList);
    localStorage.setItem("movies", JSON.stringify(movies));
    navi("/movies", { state: { movies: movies } });
  };
  return (
    <div className="AddmovieDIV">
      <form onSubmit={subButton}>
        <input type="text" name="name" placeholder="Title"></input>
        <input type="text" placeholder="Short Description"></input>
        <input type="text" placeholder="Long Description" size="50"></input>
        <input type="submit" value="addmovie"></input>
      </form>
    </div>
  );
};
export default Addmovie;