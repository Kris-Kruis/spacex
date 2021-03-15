import { MISSIONS_ACTIONS } from '../constants/missions.constants';
import { call, put, takeEvery } from 'redux-saga/effects';
import { FetchMissions, FetchMissionDetails } from '../api';
import { saveMissionsData, saveMissionDetails } from '../actions/missions.actions';

function * loadMissions () {
  try {
    const missions = yield call(FetchMissions);

    yield put(saveMissionsData(missions));
  } catch (error) {
    yield put(saveMissionsData(null));
  }
}

function * loadMissionDetails ({ payload }) {
  try {
    const missionDetails = yield call(FetchMissionDetails, payload);

    yield put(saveMissionDetails(missionDetails));
  } catch (error) {
    yield put(saveMissionDetails(null));
  }
}

export default function * missionsSaga () {
  yield takeEvery(MISSIONS_ACTIONS.LOAD_MISSIONS, loadMissions);
  yield takeEvery(MISSIONS_ACTIONS.LOAD_MISSION_DETAILS, loadMissionDetails);
}
