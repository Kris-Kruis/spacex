import { fork } from 'redux-saga/effects';
import missionsSaga from './missions.saga';
import rocketsSaga from './rockets.saga';
import launchesSaga from './launches.saga';

function * rootSaga () {
  yield fork(missionsSaga);
  yield fork(rocketsSaga);
  yield fork(launchesSaga);
}

export default rootSaga;
