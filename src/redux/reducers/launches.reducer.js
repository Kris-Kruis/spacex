import { LAUNCHES_ACTIONS } from '../constants/launches.constants';

const initialState = {
  launchesData: [],
};

export default function launchesReducer (state = initialState, action) {
  switch (action.type) {
    case LAUNCHES_ACTIONS.SAVE_LAUNCHES_DATA: {
      return {
        ...state,
        launchesData: action.payload
      };
    }
    default:
      return state;
  }
}
