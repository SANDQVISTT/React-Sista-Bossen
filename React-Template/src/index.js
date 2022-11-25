import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/layout";
import Login from "./components/login/login";
import Movies from "./components/movies/movies";
import Addmovie from "./components/movies/addMovie";
import Signup from "./components/signup/signup";
import MovieInfo from "./components/movies/Infomovie";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Movies></Movies>} />
          <Route path="movies" element={<Movies></Movies>}></Route>
          <Route path="login" element={<Login></Login>} />
          <Route path="signup" element={<Signup></Signup>} />
          <Route path="addMovie" element={<Addmovie></Addmovie>}></Route>
          <Route path="movies/:name" element= {<MovieInfo></MovieInfo>}>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
