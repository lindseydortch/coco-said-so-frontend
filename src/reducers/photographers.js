import { GET_PHOTOGRAPHERS, DELETE_PHOTOGRAPHER, ADD_PHOTOGRAPHER } from "../actions/types"

const initialState = {
  photographers: []
}

export default function photographers(state = initialState, action) {
  switch(action.type) {
    case GET_PHOTOGRAPHERS:
    return {
      ...state, 
      photographers: action.payload
    }
    case DELETE_PHOTOGRAPHER:
      return {
        ...state,
        photographers: state.photographers.filter(photographer => photographer.id !== action.payload)
      }
    case ADD_PHOTOGRAPHER:
      return {
        ...state, 
        photographers: [...state.photographers, action.payload]
      }
    default: 
      return state
  }
}