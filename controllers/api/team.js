const Player = require('../../models/player');

module.exports = {
  index,
}

async function index(req, res) {
    try {
        const players = await Player.find({})
        res.json(players);
    }
    catch(err) {
    console.log(err)
    res.status(400).json('Cannot get player');
  }
}