import React from 'react';
import store from '../store';
import { addCard } from '../actions';

class EntryForm extends React.Component {

    constructor(props) {
        super(props);
    }

    handleAddButton() {
        // Log the initial state
        console.log(store.getState());

        // Every time the state changes, log it
        let unsubscribe = store.subscribe(() =>
          console.log(store.getState())
        );

        // Dispatch some actions
        store.dispatch(addCard('http://google.com'));

        // Stop listening to state updates
        unsubscribe();
    }

    render() {
        return (
            <section className="form">
                <input id="link" />
                <button onClick={this.handleAddButton}>Add</button>
            </section>
        );
    }
}

export default EntryForm;
