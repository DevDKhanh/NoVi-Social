/*
 APi version 1.0.0
 coder: Duy Khánh
 apiAuth - SERVERAPI
*/

require('dotenv').config();
const dbUsers = require('../model/users');
const dbPosts = require('../model/posts');

const jwt = require('jsonwebtoken');
const sanitizer = require('sanitizer');

//Check xss
const xss = str => {
	return sanitizer.sanitize(sanitizer.escape(str));
};

class UserController {
	async getInfoPublic(req, res, next) {
		try {
			const { id } = req.params;
			const user = await dbUsers.findOne({ _id: id });
			return res.status(200).json({
				avatar: user.avatar,
				coverImage: user.coverImage,
				nameUser: user.fullName,
				firstName: user.firstName,
				lastName: user.lastName,
				slug: user.slug,
				id: user._id,
			});
		} catch (err) {
			return res.status(500);
		}
	}

	async getUser(req, res, next) {
		try {
			const { id } = req.query;
			let user = await dbUsers.findOne({
				slug: id,
			});

			if (!user) {
				user = await dbUsers.findOne({
					_id: id,
				});
			}
			const { email, password, _id, fullName, coverImage, ...rest } =
				user._doc;
			return res.status(200).json({
				user: {
					...rest,
					coverImage: coverImage,
					nameUser: fullName,
					id: _id,
				},
			});
		} catch (err) {
			return res.status(500);
		}
	}
}

module.exports = new UserController();
