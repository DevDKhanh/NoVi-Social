const mongoose = require('mongoose');
require('dotenv').config();
async function connect() {
	try {
		await mongoose.connect(process.env.DBMONGO_LOCAL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});
		console.log('Connect successfully!!!');
	} catch (error) {
		console.log('Connect failure!!!');
	}
}
module.exports = { connect };
