import { combineReducers } from 'redux';
import missionsReducer from './missions.reducer';
import rocketsReducer from './rockets.reducer';
import launchesReducer from './launches.reducer';

export default combineReducers({
  missions: missionsReducer,
  rockets: rocketsReducer,
  launches: launchesReducer,
});
