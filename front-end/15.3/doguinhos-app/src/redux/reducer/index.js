import { combineReducers } from "redux";

const initialState = {
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6PbfODOD4A46f6R2eG4576p3dgkGzvq7ACxcTuOWeLnewxO7ZXXty5ZHjp9VQUxQauA&usqp=CAU',
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