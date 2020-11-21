import React from "react";
import { getGhibliFilms } from "../api";

class FilmList extends React.Component {
  state = {
    filmList: [],
  };

  componentDidMount() {
    getGhibliFilms().then((filmList) => {
      this.setState({
        filmList: filmList,
      });
    });
  }
  render() {
    return (
      <>
        <ul>
          {this.state.filmList.map((film) => {
            return (
              <li key={film.id} >
                <a className="title">{film.title}</a> directed by
                <em className="director"> {film.director}</em>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default FilmList;
