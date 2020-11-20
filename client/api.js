import request from "superagent";

const ghibliApi = "https://ghibliapi.herokuapp.com/films/";

export const getgGhibliAPI = () => {
	return request
	.get(ghibliApi)
	.then((res) => res.body);
}

