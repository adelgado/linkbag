import _ from 'lodash';

import { ADD_CARD} from './actions';

const initialState = {
	cards: []
};

function main(state = initialState, action) {
	switch (action.type) {
		case ADD_CARD: {
			return _.assign(state, {
				cards: [...state.cards, {
					url: action.url
				}]
			})
		}
		default:
			return state;
	}
}

export default main
