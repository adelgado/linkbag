import React from 'react'

class CardList extends React.Component {

	render() {
		return (
			<ul>
				{this.props.cards.map(card => <li>{card.url}</li>)}
			</ul>
		)
	}

}

export default CardList
