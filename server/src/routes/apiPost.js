const express = require('express');
const router = express.Router();
const multer = require('multer');
const postController = require('../controllers/postController');
const middlewaresAuth = require('../middlewares/auth');

//setup multer
const storage = multer.diskStorage({
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now());
	},
});
const upload = multer({ storage });

router.get('/me', middlewaresAuth.authVerify, postController.getPostsMe);
router.post(
	'/',
	middlewaresAuth.authVerify,
	upload.array('files'),
	postController.post,
);
router.put('/like', middlewaresAuth.authVerify, postController.handleLike);
router.get(
	'/reaction/count',
	middlewaresAuth.authVerify,
	postController.getCoutnLike,
);
router.get('/', middlewaresAuth.authVerify, postController.getPosts);

module.exports = router;
