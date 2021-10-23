const express = require('express');
const router = express.Router();
const multer = require('multer');
const meController = require('../controllers/meController');
const middlewaresAuth = require('../middlewares/auth');

//setup multer
const storage = multer.diskStorage({
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now());
	},
});

const upload = multer({ storage });

router.put('/avatar', upload.single('file'), meController.updateAvatar);
router.get('/isLike', meController.isLike);
router.put(
	'/cover-image',
	upload.single('file'),
	meController.updateCoverImage,
);

module.exports = router;
