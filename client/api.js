import request from "superagent";

const ghibliApiURL = "https://ghibliapi.herokuapp.com/films/";

// export const getFilmList = () => {
//   return request
//     .get(getFilmList)
//     .then((res) => {
//       res.json();
//     })
// 		.then((res) => res.body);
// };

export function getGhibliFilms(){
  return request
  .get(ghibliApiURL)
  .then(res=>res.body)
}