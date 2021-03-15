import { ROCKETS_ACTIONS } from '../constants/rockets.constants';
import { call, put, takeEvery } from 'redux-saga/effects';
import { FetchRockets } from '../api';
import { saveRocketsData } from '../actions/rockets.actions';

function * loadRockets () {
  try {
    const rockets = yield call(FetchRockets);

    yield put(saveRocketsData(rockets));
  } catch (error) {
    yield put(saveRocketsData(null));
  }
}

function * rocketsSaga () {
  yield takeEvery(ROCKETS_ACTIONS.LOAD_ROCKETS, loadRockets);
}

export default rocketsSaga;
