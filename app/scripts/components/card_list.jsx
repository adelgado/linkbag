import React from 'react'
import Card  from './card'

class CardList extends React.Component {

	render() {
		return (
			<ul className="card-list">
				{this.props.cards.map((card, i) =>
					<li className="card-list__item" key={i}>
						<Card {...card} />
					</li>
				)}
			</ul>
		)
	}

}

export default CardList
