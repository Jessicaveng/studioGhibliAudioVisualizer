import request from 'superagent';

const ghibliApi = 'https://ghibliapi.herokuapp.com/films/';

export const getgGhibliAPI = () => {
	console.log(res.body);
	return request
		.get(ghibliApi) // ghibliApi + user input
		.then((res) => res.body)
		.then((results) =>
			results.map((result) => {
				console.log(results);
				return result.id;
      })
		);
};
