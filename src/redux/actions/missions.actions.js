import { MISSIONS_ACTIONS } from '../constants/missions.constants';

export const loadMissions = () => ({
  type: MISSIONS_ACTIONS.LOAD_MISSIONS,
});

export const saveMissionsData = (missions) => ({
  type: MISSIONS_ACTIONS.SAVE_MISSIONS_DATA,
  payload: missions,
});

export const loadMissionDetails = (id) => ({
  type: MISSIONS_ACTIONS.LOAD_MISSION_DETAILS,
  payload: id,
});

export const saveMissionDetails = (missionDetails) => ({
  type: MISSIONS_ACTIONS.SAVE_MISSION_DETAILS,
  payload: missionDetails,
});
