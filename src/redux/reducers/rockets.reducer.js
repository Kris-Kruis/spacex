import { ROCKETS_ACTIONS } from '../constants/rockets.constants';

const initialState = {
  rocketsData: [],
}

export default function rocketsReducer (state = initialState, action) {
  switch (action.type) {
    case ROCKETS_ACTIONS.SAVE_ROCKETS_DATA: {
      return {
        ...state,
        rocketsData: action.payload
      };
    }
    default:
      return state;
  }
}
