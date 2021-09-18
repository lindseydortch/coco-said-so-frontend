import { GET_GOALS, DELETE_GOAL, ADD_GOAL } from "../actions/types"

const initialState = {
  goals: []
}

export default function goals(state = initialState, action) {
  switch(action.type) {
    case GET_GOALS:
    return {
      ...state, 
      goals: action.payload
    }
    case DELETE_GOAL:
      return {
        ...state,
        goals: state.goals.filter(goal => goal.id !== action.payload)
      }
    case ADD_GOAL:
      return {
        ...state, 
        goals: [...state.goals, action.payload]
      }
    default: 
      return state
  }
}