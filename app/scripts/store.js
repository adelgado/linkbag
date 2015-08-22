import { createStore } from 'redux';
import main from './reducers';

let store = createStore(main);

export default store;
