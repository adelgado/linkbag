import { createStore } from 'redux';
import main from './reducers';

const initialState = {
	cards: []
}

export default store;
let store = createStore(main, initialState)
