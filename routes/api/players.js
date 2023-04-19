const express = require('express');
const router = express.Router();
const playersCtrl = require('../../controllers/api/players');


// POST /api/players
router.post('/', playersCtrl.create);
// POST /api/players/login
router.post('/login', playersCtrl.login);



module.exports = router;