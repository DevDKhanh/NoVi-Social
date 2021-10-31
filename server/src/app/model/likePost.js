const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likePostSchame = new Schema(
	{
		idUser: { type: String, default: '', require: true },
		idPost: { type: String, default: '', require: true },
		status: { type: Number, default: 0, require: true },
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model(
	'likePosts_tbls',
	likePostSchame.index({ '$**': 'text' }),
);
