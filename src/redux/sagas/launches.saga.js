import { LAUNCHES_ACTIONS } from '../constants/launches.constants';
import { call, put, takeEvery } from 'redux-saga/effects';
import { FetchLaunches } from '../api';
import { saveLaunchesData } from '../actions/launches.actions';

function * loadLaunches () {
  try {
    const launches = yield call(FetchLaunches);

    yield put(saveLaunchesData(launches));
  } catch (error) {
    yield put(saveLaunchesData(null));
  }
}

function * launchesSaga () {
  yield takeEvery(LAUNCHES_ACTIONS.LOAD_LAUNCHES, loadLaunches);
}

export default launchesSaga;
