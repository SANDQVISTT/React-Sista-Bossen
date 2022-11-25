import React from "react";
import { NavLink } from "react-router-dom";


const App = () => {

  return (

    <div>
      <h1> hello App.js</h1>
      <ul>
        <li>
          <NavLink to="/movies/addMovie"> addMovie</NavLink>
          <li>
            <NavLink to="/login"> login</NavLink>
           
          </li>
        </li>
      </ul>



    </div>

  )

}

export default App;