const express = require('express');
const router = express.Router();
const playersCtrl = require('../../controllers/api/players');


// POST /api/players
router.post('/', playersCtrl.create);

// POST /api/players/login
router.post('/login', playersCtrl.login);

// POST /api/players/:id/trainings
router.post('/:id/trainings', playersCtrl.addTraining)

// GET /api/players/:id
router.get('/:id', playersCtrl.show)

// GET /api/players/trainings/:id
router.get('/trainings/:id', playersCtrl.trainings)

// DELETE /api/players/:id/delete
router.delete('/:id/delete', playersCtrl.delete)

module.exports = router;