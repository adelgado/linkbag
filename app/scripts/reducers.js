import { ADD_CARD } from './actions'
import Immutable from 'immutable'


function main(state, action) {
	switch (action.type) {
		case ADD_CARD:
			return state.update('cards', (cards) => {
				return cards.push(new Immutable.Map({url: action.url}))
			})
		default:
			return state
	}
}

export default main
