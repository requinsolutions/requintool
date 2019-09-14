// app.js
var morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const path = require('path');
const router = require('./routes');
var db = require('./config/db');
var cookieParser = require('cookie-parser')


// initialize our express app
const app = express();
app.use(morgan('dev'));
app.use(cors());
// Set up mongoose// mongodb://avek123:abcd1234@ds119765.mlab.com:19765/productstutorial// connection

app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('uploads'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', router);


app.use((req, res, next) => {
	const error = new Error("Not found");
	error.status = 404;
	next(error);
});
app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	});
});

module.exports = app;
