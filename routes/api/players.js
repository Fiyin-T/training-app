const express = require('express');
const router = express.Router();
const playersCtrl = require('../../controllers/api/players');


// POST /api/players
router.post('/', playersCtrl.create);
// POST /api/players/login
router.post('/login', playersCtrl.login);

// GET /api/players/:id
router.get('/:id', playersCtrl.show)

// DELETE /api/players/:id/delete
router.delete('/:id/delete', playersCtrl.delete)

module.exports = router;