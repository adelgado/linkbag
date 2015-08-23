/*
 * action types
 */

export const ADD_CARD = 'ADD_CARD'

/*
 * action creators
 */

export function addCard(url) {
	return { type: ADD_CARD, url }
}
