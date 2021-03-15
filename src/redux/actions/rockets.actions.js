import { ROCKETS_ACTIONS } from '../constants/rockets.constants';

export const loadRockets = () => ({
  type: ROCKETS_ACTIONS.LOAD_ROCKETS,
});

export const saveRocketsData = (rockets) => ({
  type: ROCKETS_ACTIONS.SAVE_ROCKETS_DATA,
  payload: rockets,
});
