import { GET_AGENCIES, DELETE_AGENCY, ADD_AGENCY } from "../actions/types"

const initialState = {
  agencies: []
}

export default function agencies(state = initialState, action) {
  switch(action.type) {
    case GET_AGENCIES:
    return {
      ...state, 
      agencies: action.payload
    }
    case DELETE_AGENCY:
      return {
        ...state,
        agencies: state.agencies.filter(agency => agency.id !== action.payload)
      }
    case ADD_AGENCY:
      return {
        ...state, 
        agencies: [...state.agencies, action.payload]
      }
    default: 
      return state
  }
}