import request from 'superagent'

const ghibliAPI = 'https://ghibliapi.herokuapp.com/'

const authKey = 'BNLGPTNP6BTY'

export function searchByTitle(query) {
  return request
    .get(ghibliAPI + query)
    .then((res) => res.body.results)
    .then((results) =>
      results.map((result) => {
        return result.title
      })
    )
  // .then((results) => results.slice(0, 10))
}
