const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_FILMS':
      return action.films
    default:
      return state
  }
}

export default reducer
