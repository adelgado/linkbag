var React = require('react');
var Home = require('./components/home');
import { Provider } from 'react-redux'
import store        from './store'

React.render(
	// The child must be wrapped in a function
	// to work around an issue in React 0.13.
	<Provider store={store}>
		{() => <Home />}
	</Provider>,
	document.getElementById('app')
)
