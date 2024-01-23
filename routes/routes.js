const express = require('express');
const router = express.Router();
const multer = require('multer'); // Import multer for file uploads

const { Register, Login, Admin, storage, getProducts } = require('../controller/user-controller');

const upload = multer({ storage: storage });

router.post('/login', Login);
router.post('/register', Register);
router.get('/admin', getProducts)
router.post('/admin', upload.single("image"), Admin);

module.exports = router;
