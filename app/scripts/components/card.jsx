import React from 'react'
import { FETCH_STATUS } from '../actions'

export default class Card extends React.Component {

	isFetching() {
		return this.props.fetchStatus == FETCH_STATUS.FETCHING
	}

	render() {
		if (this.isFetching()) {
			return <div className="card">Loading...</div>
		} else {
			return (
				<div className="card">
					<a href={this.props.url}>{this.props.title}</a>
					<p>{this.props.description}</p>
					<p>{this.props.url}</p>
					<button onClick={() => this.props.onRemove(this.props.url)}>
						Remove
					</button>
				</div>
			)
		}
	}

}
