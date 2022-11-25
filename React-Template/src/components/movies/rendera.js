import MovieCard from "./movieItem";

const DisplayMoviecard = (props) => {
    return (
      <div className="Cards">
        {props.data.map((value, index) => {
          return <MovieCard key={index} value={value}></MovieCard>;
        })}
      </div>
    );
  };
  
  export default DisplayMoviecard;