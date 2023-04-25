
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;


const trainingSchema = new Schema({
    attribute: {type: String, required: true, enum: ['PACE', 'SHOT', 'PASS', 'DRI', 'DEF', 'STA']},
    activity: {type: String, required: true},
    duration: {type: Number, required: true}
}, {
    timestamps: true
})


const playerSchema = new Schema({
    name: {type: String, required: true},
    email: { type: String, unique: true, trim: true, lowercase: true, required: true },
    isPlayer: { type: Boolean, default: true },
    password: {
        type: String,
        trim: true,
        minlength: 3,
        required: true
      },
    age: {type: Number, required: true},
    position: {type: String, required: true, enum: ['Goal Keeper', 'Defender', 'Mid-Fielder', 'Forward']},
    height: {type: Number, required: true},
    preferredFoot: {type: String, required: true, enum: ['Left', 'Right']},
    trainings: [trainingSchema]
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
          delete ret.password;
          return ret;
        }
      }
})

playerSchema.pre('save', async function(next) {
    // 'this' is the player doc
    if (!this.isModified('password')) return next();
    // the password is either new, or being updated
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  });


module.exports = mongoose.model('Player', playerSchema);