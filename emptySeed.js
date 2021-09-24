const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

const Player = require('./models/playerSchema');  //constructor

async function seed() {
    console.log('Deleting existing books')
    await Player.deleteMany({});


    mongoose.disconnect();
    console.log('Your seed should be empty now')
}

seed();