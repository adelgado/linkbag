import Immutable from 'immutable'
import { createStore } from 'redux'
import main from './reducers'

const initialState = Immutable.Map({
	cards: Immutable.List()
})

let store = createStore(main, initialState)

export default store
