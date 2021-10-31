const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authAccountSchame = new Schema(
	{
		emailUser: { type: String, default: '' },
		isBlock: { type: Boolean, default: false },
		isReady: { type: Boolean, default: false },
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model(
	'authAccount_tbls',
	authAccountSchame.index({ '$**': 'text' }),
);
