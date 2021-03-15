import { LAUNCHES_ACTIONS } from '../constants/launches.constants';

export const loadLaunches = () => ({
  type: LAUNCHES_ACTIONS.LOAD_LAUNCHES,
});

export const saveLaunchesData = (launches) => ({
  type: LAUNCHES_ACTIONS.SAVE_LAUNCHES_DATA,
  payload: launches,
});
