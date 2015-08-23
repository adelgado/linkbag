import React                  from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCard }            from '../actions'
import EntryForm              from './entry_form'
import CardList               from './card_list'

class Home extends React.Component {

	addEntry = (url) => {
		this.props.dispatch(addCard(url))
	}

	render() {
		return (
			<div>
				<EntryForm onEntry={this.addEntry} />
				<CardList cards={this.props.cards} />
			</div>
		)
	}

}

// Wrap the component to inject dispatch and state into it
export default connect(state => state.toJS())(Home)
