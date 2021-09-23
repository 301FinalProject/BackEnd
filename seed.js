const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

const Player = require('./models/playerRoute');  //constructor

async function seed() {
    console.log('Deleting existing books')
    await Player.deleteMany({});

    const myPlayer1 = new Player({
        Gamertag: "DeAtHBoO",
        Rank: "1"
    });
    await myPlayer1.save();

    const myPlayer2 = new Player({
        Gamertag: "Degenerate9402",
        Rank: "2"
    });
    await myPlayer2.save();

    const myPlayer3 = new Player({
        Gamertag: "SmoothSaylor",
        Rank: "3"
    });
    await myPlayer3.save();

    mongoose.disconnect();
    console.log('I have added your seed players')
}

seed();