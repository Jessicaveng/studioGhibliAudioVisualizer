import React from "react";
import FilmList from "./FilmList";
import Audio from "./Audio";

const App = () => {
  return (
    <div>
      <img className="ghibliLogo" src="./images/studio-ghibli-logo.svg" />
      <FilmList />
      {/* <Audio  /> */}

    </div>
  );
};
export default App;
