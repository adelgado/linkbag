import React       from 'react'
import { connect } from 'react-redux'
import { addCard
       , removeCard
       } from '../actions'
import EntryForm   from './entry_form'
import CardList    from './card_list'

class Home extends React.Component {

	handleAddEntry = (url) =>
		this.props.dispatch(addCard(url))

	handleRemoveCard = (url) =>
		this.props.dispatch(removeCard(url))

	render() {
		return (
			<div>
				<EntryForm onEntry={this.handleAddEntry} />
				<CardList cards={this.props.cards} onRemove={this.handleRemoveCard} />
			</div>
		)
	}

}

// Wrap the component to inject dispatch and state into it
export default connect(state => state.toJS())(Home)
