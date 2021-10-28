/*
 APi version 1.0.0
 coder: Duy Khánh
 apiAuth - SERVER_API
*/

require('dotenv').config();
const dbUsers = require('./model/users');
const dbPosts = require('./model/posts');
const dbLikePosts = require('./model/likePost');

const cloudinary = require('../utils/cloudinary');
const jwt = require('jsonwebtoken');
const sanitizer = require('sanitizer');

//Check xss
const xss = str => {
	return sanitizer.sanitize(sanitizer.escape(str));
};

class UserController {
	async updateAvatar(req, res, next) {
		try {
			const token = req.headers['authorization'].split(' ')[1];
			const file = req.file;
			if (!token || token == 'null')
				return res.status(401).json({
					status: 0,
					code: 401,
					message:
						'Failed to authenticate because of bad credentials or an invalid authorization header',
				});

			const data = await jwt.verify(token, process.env.JWT_SECRET);
			if (data.data && file) {
				//Find current user
				const { id } = data.data;
				const currentUser = await dbUsers.findOne({
					_id: id,
				});

				//Upload file
				const resCloudinary = await cloudinary.uploader.upload(
					file.path,
				);

				//Check if have id img then destroy
				if (currentUser.idImageAvatar) {
					const deleteFileInCloudinary =
						await cloudinary.uploader.destroy(
							currentUser.idImageAvatar,
						);
				}

				const readyUpdateAvatar = await dbUsers.updateOne(
					{ _id: id },
					{
						avatar: resCloudinary.secure_url,
						idImageAvatar: resCloudinary.public_id,
					},
				);

				if (readyUpdateAvatar) {
					return res.status(200).json({
						status: 1,
						code: 200,
						avatar: resCloudinary.secure_url,
					});
				} else {
					return res.status(500);
				}
			} else {
				return res.status(400);
			}
		} catch (err) {
			return res.status(500);
		}
	}

	async updateCoverImage(req, res, next) {
		try {
			const token = req.headers['authorization'].split(' ')[1];
			const file = req.file;
			if (!token || token == 'null')
				return res.status(401).json({
					status: 0,
					code: 401,
					message:
						'Failed to authenticate because of bad credentials or an invalid authorization header',
				});

			const data = await jwt.verify(token, process.env.JWT_SECRET);

			if (data.data && file) {
				//Find current user
				const { id } = data.data;
				const currentUser = await dbUsers.findOne({
					_id: id,
				});

				//Upload file
				const resCloudinary = await cloudinary.uploader.upload(
					file.path,
				);

				//Check if have id img then destroy
				if (currentUser.idImageCover) {
					const deleteFileInCloudinary =
						await cloudinary.uploader.destroy(
							currentUser.idImageCover,
						);
				}

				const readyUpdateCoverImage = await dbUsers.updateOne(
					{ _id: id },
					{
						coverImage: resCloudinary.secure_url,
						idImageCover: resCloudinary.public_id,
					},
				);

				if (readyUpdateCoverImage) {
					return res.status(200).json({
						status: 1,
						code: 200,
						coverImage: resCloudinary.secure_url,
					});
				} else {
					return res.status(500);
				}
			} else {
				return res.status(400);
			}
		} catch (err) {
			return res.status(500);
		}
	}

	async isLike(req, res, next) {
		try {
			const { id } = req.query;
			const token = req.headers['authorization'].split(' ')[1];

			if (!token || token == 'null') {
				return res.status(200).json({ isLike: false });
			}

			const data = await jwt.verify(token, process.env.JWT_SECRET);
			const isLike = await dbLikePosts.findOne({
				idPost: id,
				idUser: data.data.id,
				status: 0,
			});

			if (isLike) {
				return res.status(200).json({ isLike: true });
			} else {
				return res.status(200).json({ isLike: false });
			}
		} catch (err) {
			return res.status(500);
		}
	}
}

module.exports = new UserController();
