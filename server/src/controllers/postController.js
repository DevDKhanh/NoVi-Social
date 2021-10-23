/*
 APi version 1.0.0
 coder: Duy Khánh
 apiAuth - SERVER_API
*/

require('dotenv').config();
const dbUsers = require('./model/users');
const dbPosts = require('./model/posts');

const cloudinary = require('../utils/cloudinary');
const jwt = require('jsonwebtoken');
const sanitizer = require('sanitizer');

//Check xss
const xss = str => {
	return sanitizer.sanitize(sanitizer.escape(str));
};

class PostController {
	async post(req, res, next) {
		try {
			const token = req.headers['authorization'].split(' ')[1];
			const dataUser = await jwt.verify(token, process.env.JWT_SECRET);
			const { email } = dataUser.data;
			const filesImage = req.files;
			const content = xss(req.body.content, {});

			if (content.trim() !== '' || filesImage.length > 0) {
				if (filesImage.length > 10) {
					return res.status(200).json({
						status: 0,
						code: 200,
						message:
							'The number of uploaded photos must be less than 10',
						message_vn: 'Số lượng ảnh tải lên phải ít hơn 10',
					});
				}

				if (filesImage.length > 0 && filesImage.length < 10) {
					let multiplePicturePromise = filesImage.map(picture =>
						cloudinary.uploader.upload(picture.path),
					);
					let imageResponses = await Promise.all(
						multiplePicturePromise,
					);
					const listImgPost = imageResponses.map(
						res => res.secure_url,
					);

					const newPost = await new dbPosts({
						email: email,
						content: content,
						images: listImgPost,
					});
					const savePost = await newPost.save();
					if (savePost) {
						return res.status(201).json({
							status: 1,
							code: 201,
							post: savePost,
							message: 'Posted successfully',
							message_vn: 'Đăng thành công',
						});
					} else {
						return res.status(500);
					}
				} else {
					const newPost = new dbPosts({
						email: email,
						content: content,
					});
					const savePost = await newPost.save();
					if (savePost) {
						return res.status(201).json({
							status: 1,
							code: 201,
							post: savePost,
							message: 'Posted successfully',
							message_vn: 'Đăng thành công',
						});
					} else {
						return res.status(500);
					}
				}
			} else {
				return res.status(200).json({
					status: 0,
					code: 200,
					post: savePost,
					message: 'Incomplete information provided',
					message_vn: 'Vui lòng nhập đầy đủ thông tin',
				});
			}
		} catch (err) {
			return res.status(500);
		}
	}

	async getPosts(req, res, next) {
		try {
			const posts = await dbPosts.find({}).sort({ createdAt: -1 });
			if (posts) {
				return res.status(200).json({
					status: 1,
					code: 200,
					posts: posts,
				});
			} else {
				return res.status(500);
			}
		} catch (err) {
			return res.status(500);
		}
	}

	async getPostsMe(req, res, next) {
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

			const postsMe = await dbPosts
				.find({ email: user.email })
				.sort({ createdAt: -1 });

			if (postsMe) {
				return res.status(200).json({
					status: 1,
					code: 200,
					posts: postsMe,
				});
			} else {
				return res.status(500);
			}
		} catch (err) {
			return res.status(500);
		}
	}

	async handleLike(req, res, next) {
		try {
			const { id } = req.body;
			const token = req.headers['authorization'].split(' ')[1];

			const [dataUser, infoPost] = await Promise.all([
				jwt.verify(token, process.env.JWT_SECRET),
				dbPosts.findOne({ _id: id }),
			]);
			res.json({ infoPost, dataUser });
		} catch (err) {
			return res.status(500);
		}
	}
}

module.exports = new PostController();
