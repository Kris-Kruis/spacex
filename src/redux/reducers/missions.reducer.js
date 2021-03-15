import { MISSIONS_ACTIONS } from '../constants/missions.constants';

const initialState = {
  missionsData: [],
  missionDetails: null,
};

export default function missionsReducer (state = initialState, action) {
  switch (action.type) {
    case MISSIONS_ACTIONS.SAVE_MISSIONS_DATA: {
      return {
        ...state,
        missionsData: action.payload
      };
    }
    case MISSIONS_ACTIONS.SAVE_MISSION_DETAILS: {
      return {
        ...state,
        missionDetails: action.payload
      };
    }
    default:
      return state;
  }
}
