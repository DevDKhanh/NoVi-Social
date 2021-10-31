const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const settingSchame = new Schema(
	{
		email: { type: String },
		theme: { type: String, default: 'light' },
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model(
	'setting_tbls',
	settingSchame.index({ '$**': 'text' }),
);
