import React from 'react'

class EntryForm extends React.Component {

	handleAddButtonClick() {
		const node = React.findDOMNode(this.refs.input)
		const text = node.value.trim()
		this.props.onEntry(text)
		node.value = ''
	}

	render() {
		return (
			<section className="form">
				<input type="text" id="link" ref="input" />
				<button onClick={this.handleAddButtonClick.bind(this)}>Add</button>
			</section>
		)
	}
}

export default EntryForm
