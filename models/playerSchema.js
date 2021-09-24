const mongoose = require('mongoose');

const { Schema } = mongoose;

const playerSchema = new Schema({
    playerName:  {
        type:  String,
        required: true,
    },
    playerRank:  {
        type: String,
        required: true,
    }
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
