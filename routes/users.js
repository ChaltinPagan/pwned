const express = require('express');
const router = express.Router();
const users = require('../queries/user-queries');

router.get('/', users.getUsers);
router.post('/login', users.loginUser);
router.post('/new', users.registerUser);
// router.post('/:email', db.getSingleUser);
// router.post('/', db.loginUser);
// router.put('/update-pw', db.updatePassword);
// router.put('/update', db.updateUser);

module.exports = router;