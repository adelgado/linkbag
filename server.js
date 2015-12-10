// Make sure to include the JSX transpiler
require("babel/register");

var express = require('express'),
	 cors    = require('cors'),
	 path = require('path'),
	 app = express(),
	 port = 3000,
	 bodyParser = require('body-parser'),
	 React = require('react'),
	 ReactAddons = require('react/addons');
	 store = require('./app/scripts/store.js')

var ReactApp = ReactAddons.createFactory(require('./app/scripts/components/home.jsx'));

// Include static assets. Not advised for production
app.use(express.static(path.join(__dirname, 'public/')));

// Access-Control-Allow-Origin: *
app.use(cors())

// Set view path
app.set('views', path.join(__dirname, 'views'));
// set up ejs for templating. You can use whatever
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	 res.append('X-Yo', 'qualeh?')
	 res.render('index.ejs', {
		  reactOutput: ReactAddons.renderToString(ReactApp({ store })),
	 })
})

//Route not found -- Set 404
app.use(function(req, res, next) {
	 res.status(404).send('Sorry cant find that!');
})

app.listen(port)
console.log('Server is up and running on port ' + port)
