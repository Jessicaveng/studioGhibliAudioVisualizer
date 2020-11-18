import React from 'react';
import { searchByTitle } from '../api';

class App extends React.Component {
	state = {
		movieListToDisplay: null,
	userInput: '',
	};

	// handleChange = (evt) => {
	// 	this.setState({
	// 	userInput: evt.target.value,
	// 	});
	// };

	submit = (evt) => {
		evt.preventDefault();
		searchByTitle(this.state.userInput).then((result_SearchByTitle) => {
			this.setState({
				movieListToDisplay: result_SearchByTitle,
			});
		});
	};

	// movieListToDisplay = () => {
	// 	return (
	// 		<>
	// 			{this.state.movieListToDisplay.map((result) => {
	// 				return <img src={result} />;
	// 			})}
	// 		</>
	// 	);
	// };

	render() {
		return (
			<>
				<h1>HELLO WORLD</h1>
				{/* <form onSubmit={this.submit}>
					{/* <label htmlFor="SearchFilm"></label> */}
					{/* <input type="search" placeholder= "Search" name="SearchFilm"  /> */}
          {/* onChange={this.handleChange}  goes into line above */}
					{/* <input type="submit" value="Submit"  />  */}
          {/* onClick={this.submit} goes into line above */} 
				{/* </form> */} 
				{this.state.movieListToDisplay && this.movieListToDisplay()}
			</>
		)
	}
}
export default App;
