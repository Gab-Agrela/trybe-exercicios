import { combineReducers } from "redux";

const initialState = {
  img: 'https://img.freepik.com/vetores-premium/clique-aqui-botao-com-ponteiro-de-mao-clicando-botao-de-clique-moderno-com-cursor-de-mouse-de-computador-web-bu_435184-1093.jpg?w=2000',
  loading: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_IMAGE':
      return {
        ...state,
        img: action.payload,
        loading: false,
      }
      case 'LOADING_MESSAGE':
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({reducer})

export default rootReducer