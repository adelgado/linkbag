import React from 'react'
import Card  from './card'

class CardList extends React.Component {

	render() {
		return (
			<ul>
				{this.props.cards.map(card => {
					return <li>
						<Card {...card} />
					</li>
				})}
			</ul>
		)
	}

}

export default CardList
