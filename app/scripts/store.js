import Immutable                        from 'immutable'
import { createStore, applyMiddleware } from 'redux'
import thunk                            from 'redux-thunk'
import main                             from './reducers'

const initialState = Immutable.Map({
	cards: Immutable.List()
})

let store = applyMiddleware(thunk)(createStore)(main, initialState)

export default store
