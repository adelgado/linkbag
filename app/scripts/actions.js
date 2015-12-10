import Superagent from 'superagent'

export const ADD_CARD     = 'ADD_CARD'
export const FECTH_CARD   = 'FECTH_CARD'
export const RECEIVE_CARD = 'RECEIVE_CARD'

export const FETCH_STATUS = {
	FETCHING : 'FETCHING',
	FETHED   : 'FETCHED'
}

export function addCardOptimistic(url) {
	return {
		type: ADD_CARD,
		fetchStatus: FETCH_STATUS.FETCHING,
		url
	}
}

export function addCard(url) {
	return function (dispatch) {
		// First of all, let's do the optimistic UI update - we need to
		// dispatch the old synchronous action object, using the renamed
		// action creator.
		dispatch(addCardOptimistic(url))

		// Now that the store has been notified of the new todo item, we should
		// also notify our server - we'll use here ES6 fetch function to post the
		// data
		// Superagent.get(url)
		// .then(response => {
		// 	debugger
		// 	// you should probably get a real id for your new todo item here,
		// 	// and update your store, but we'll leave that to you
		// 	dispatch(receiveCard(response))
		// }).catch(error => {
		// 	dispatch(receiveCard(error))
		// 	// Error: handle it the way you like, undoing the optimistic update,
		// 	//  showing a "out of sync" message, etc.
		// })

		// what you return here gets returned by the dispatch function that
		// used this action creator


		// Let's fake this for now

		setTimeout(function () {
			let cardHtml = '<html><head><title>Hey</title></head><body><h1>hello</h1></body></html>'
			dispatch(receiveCard(url, cardHtml))
		}, 1500)
		return null
	}
}

export function receiveCard(url, html) {
	return {
		type: RECEIVE_CARD,
		fetchStatus: FETCH_STATUS.FETCHED,
		url, html
	}
}
