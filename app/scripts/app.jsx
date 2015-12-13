import React        from 'react'
import ReactDOM     from 'react-dom'
import { Provider } from 'react-redux'
import store        from './store'
import Home         from './components/home'
import Elm          from './components/panel.elm'

ReactDOM.render(
	<Provider store={store}>
		<Home />
	</Provider>,
	document.querySelector('main')
)

Elm.embed(Elm.Main, document.querySelector('.panel'))
