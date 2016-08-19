import {combineReducers} from 'redux';
import DogReducer from '../reducers/dog-reducer';
import ActiveDogReducer from '../reducers/reducer-active-dog'

const allReducers = combineReducers({
	dogs: DogReducer,
	activeDog: ActiveDogReducer
});

export default allReducers;