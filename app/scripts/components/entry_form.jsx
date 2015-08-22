import React from 'react';
import store from '../store';
import { addCard } from '../actions';

class EntryForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleInputChange(event) {
        this.setState({value: event.target.value});
    }

    handleAddButtonClick() {
        // Log the initial state
        console.log(store.getState());

        // Every time the state changes, log it
        let unsubscribe = store.subscribe(() =>
          console.log(store.getState())
        );

        // Dispatch some actions
        store.dispatch(addCard(this.state.value));

        // Stop listening to state updates
        unsubscribe();
    }

    render() {
        return (
            <section className="form">
                <input type="text" id="link" onChange={this.handleInputChange.bind(this)} />
                <button onClick={this.handleAddButtonClick.bind(this)}>Add</button>
            </section>
        );
    }
}

export default EntryForm;
