const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Player = require('../../models/player');
const Training = require('../../models/player')

module.exports = {
  create,
  login,
  checkToken,
  delete:playerDelete,
  show,
  addTraining,
  trainings
};

function checkToken(req, res) {
  console.log(req.player);
  res.json(req.exp);
}

async function login(req, res) {
  try {
    const player = await Player.findOne({email: req.body.email});
    if (!player) throw new Error();
    const match = await bcrypt.compare(req.body.password, player.password);
    if (!match) throw new Error();
    const token = createJWT(player);
    res.json(token);
  } catch(err){
    console.log(err)
    res.status(400).json('Bad Credentials');
  }
}

async function create(req, res) {
  try {
    const player = await Player.create(req.body);
    // const token = createJWT(player);
    // The token is a string, but yes, we can
    // res.json a string
    res.json(player);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function playerDelete(req, res) {
  try{
    const player = await Player.findByIdAndDelete(req.params.id);
    res.json(player);
  } catch(err){
    res.status(400).json(err);
  }

}

async function show(req, res) {
  try {
    const player = await Player.findById(req.params.id);
    res.json(player)
  } catch (err) {
    res.status(400).json(err)
  }
}

async function addTraining(req, res) {
  try {
    const player = await Player.findById(req.params.id)
    player.trainings.push(req.body)
    player.save()
    res.json(player)
  } catch (err) {
    res.status(400).json(err)
  }
}

async function trainings(req, res) {
  try {
    const player = await Player.findById(req.params.id);
    const trainings = player.trainings
    res.json(trainings)
  } catch (err) {
    res.status(400).json(err)
  }
}

/*-- Helper Functions --*/
function createJWT(player) {
  return jwt.sign(
    // extra data for the payload
    { player },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}