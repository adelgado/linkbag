import React from 'react'

export default class EntryForm extends React.Component {

	handleAddButtonClick = () => {
		const node = React.findDOMNode(this.refs.input)
		const text = node.value.trim()
		this.props.onEntry(text)
		node.value = ''
	}

	render() {
		return (
			<section className="entry-form">
				<input type="text" ref="input" />
				<button onClick={this.handleAddButtonClick}>Add</button>
			</section>
		)
	}
}
