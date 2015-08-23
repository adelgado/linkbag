import React from 'react'

class Card extends React.Component {

	render() {
		return (
			<div>
				<a href={this.props.url}>{this.props.title}</a>
				<p>{this.props.description}</p>
				<p>{this.props.url}</p>
				<button>Remove</button>
			</div>
		)
	}

}

export default Card
