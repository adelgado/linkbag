import React from 'react';

// TODO: find out a way to require module-specific less file
// which will work for server rendering
// require('!style!css!less!./less/home.less')

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="form">
                <input id="link" />
                <button>Adicionar</button>
            </section>
        );
    }
}

export default Home;
