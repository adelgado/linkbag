import React        from 'react'
import { Provider } from 'react-redux'
import store        from './store'
import Home         from './components/home'

React.render(
	// The child must be wrapped in a function
	// to work around an issue in React 0.13.
	<Provider store={store}>
		{() => <Home />}
	</Provider>,
	document.getElementById('app')
)
