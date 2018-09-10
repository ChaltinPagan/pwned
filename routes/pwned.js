const express = require('express');
const router = express.Router();
const pwned = require('../queries/pwned-queries');

router.get('/:input', pwned.pwnedPasswordRange);

module.exports = router;