const errorHandler = require('../errorHandler');
const Player = require('../models/playerSchema');

module.exports = { getSavedPlayers};

async function getSavedPlayers(request, response) {
    const savedPlayers = await Player.find();
    console.log('This is the gamertag......', savedPlayers);
    response.send(savedPlayers);
}