const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

const Player = require('./models/playerSchema');  //constructor

async function seed() {
    console.log('Deleting existing books')
    await Player.deleteMany({});

    const myPlayer1 = new Player({
        playerName: "DeAtHBoO",
        playerRank: "1"
    });
    await myPlayer1.save();

    const myPlayer2 = new Player({
        playerName: "Degenerate9402",
        playerRank: "2"
    });
    await myPlayer2.save();

    const myPlayer3 = new Player({
        playerName: "SmoothSaylor",
        playerRank: "3"
    });
    await myPlayer3.save();

    mongoose.disconnect();
    console.log('I have added your seed players')
}

seed();