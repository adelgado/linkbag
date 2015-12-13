import Immutable from 'immutable'

import { ADD_CARD
       , RECEIVE_CARD
       , FETCH_STATUS
       , REMOVE_CARD
       } from './actions'

const initialState = Immutable.Map({
	cards: Immutable.List()
})

const addCardReducer = (state, action) => (
	state.update('cards', (cards) =>
		cards.push(new Immutable.Map(
			{ url: action.url
			, fetchStatus: action.fetchStatus
			}
		))
	)
)

function receiveCardReducer(state, { url, html }) {
	let cards = state.get('cards')
	return state.update('cards', () => cards.update(
		cards.findIndex(
			(card) => card.get('url') === url),
			(card) => {
				card = card.set('html', () => html)
				card = card.update('fetchStatus', () => FETCH_STATUS.FETCHED)
				return card
			}
		)
	)
}

function removeCardReducer(state, { url }) {
	debugger
	let cards = state.get('cards')
	return state.update('cards', () => cards.delete(
		cards.findIndex((card) => card.get('url') === url),
	))
}

export default function main(state = initialState, action) {
	switch (action.type) {
		case ADD_CARD:
			return addCardReducer(state, action)
		case RECEIVE_CARD:
			return receiveCardReducer(state, action)
		case REMOVE_CARD:
			return removeCardReducer(state, action)
		default:
			return state
	}
}
