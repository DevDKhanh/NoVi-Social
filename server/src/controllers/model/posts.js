const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchame = new Schema(
	{
		email: { type: String, default: '', require: true },
		content: { type: String, default: '', require: true },
		feel: { type: String, default: '' },
		images: { type: Array, default: [] },
		statusPost: { type: Number, default: 0 },
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model(
	'posts_tbls',
	postSchame.index({ '$**': 'text' }),
);
