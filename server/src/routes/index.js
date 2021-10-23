require('dotenv').config();
const Post = require('./apiPost');
const Auth = require('./apiAuth');
const User = require('./apiUser');
const Me = require('./apiMe');
const middlewaresAuth = require('../middlewares/auth');

function route(app) {
	app.use(`${process.env.BASE_API}/posts`, Post);
	app.use(`${process.env.BASE_API}/auth`, Auth);
	app.use(`${process.env.BASE_API}/user`, User);
	app.use(`${process.env.BASE_API}/me`, Me);
}

module.exports = route;
