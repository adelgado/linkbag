import { createStore } from 'redux'
import main from './reducers'

const initialState = {
	cards: []
}

let store = createStore(main, initialState)

export default store
