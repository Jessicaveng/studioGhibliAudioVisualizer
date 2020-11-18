import React from "react";
import { searchByTitle } from "../api";

class App extends React.Component {
  state = {
    movieListToDisplay: null,
    query: ''
  };

  
  handleChange = (evt) => {
    this.setState({
      query: evt.target.value
    })
  }

  submit = (evt) => {
    evt.preventDefault()
    searchByTitle(this.state.query).then((result_SearchByTitle) => {
      console.log("this is the data from search for gif function", result_SearchByTitle);
      this.setState({
        movieListToDisplay: result_SearchByTitle,
      });
    });
  };

  movieListToDisplay = () => {
    return (
      <>
        {this.state.movieListToDisplay.map((result) =>{
          return <img src={result}/>
        } )}
      </>
    );
  };

  render() {
    return (
      <>
        <h1>Is anyone listening?</h1>
        <form onSubmit={this.submit}>
        <label htmlFor="SearchFilm">Which gif are you feeling?</label>
        <input type="search" name="SearchFilm" onChange={this.handleChange} />
        <input type="submit" value="Submit" onClick={this.submit} />
        </form>
        {this.state.movieListToDisplay && this.movieListToDisplay()}
      </>
    );
  }
}
export default App;