const mongoose = require('mongoose');

const { Schema } = mongoose;

const playerSchema = new Schema({
    Gamertag:  String,
    Rank:  String,
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
