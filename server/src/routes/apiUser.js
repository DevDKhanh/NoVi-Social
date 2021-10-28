const express = require('express');
const router = express.Router();
const multer = require('multer');
const userController = require('../controllers/userController');
const middlewaresAuth = require('../middlewares/auth');

//setup multer
const storage = multer.diskStorage({
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now());
	},
});

const upload = multer({ storage });

router.get('/public/:id', userController.getInfoPublic);
router.get('/data', userController.getUser);

module.exports = router;
