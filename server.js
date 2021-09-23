'use strict';

require('dotenv').config();
const express = require('express');

const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

const client = jwksClient({
  jwksUri: 'https://dev-txxoephp.us.auth0.com/.well-known/jwks.json',
});

const { promisify } = require('util');
const verify = promisify(jwt.verify);

function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    if (err) return callback(err);

    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

async function verifyUser(authorization) {
  if (!authorization) return null;
  let token = authorization.split(' ')[1];

  return await verify(token, getKey, {});
}



const mongoose = require('mongoose');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    console.log('Connected to Mongo!')
});

mongoose.connect(process.env.MONGODB_URI);


//import Mongoose model
const Player = require('./models/playerRoute');

const app = express();

const cors = require('cors');
const { getSeason } = require('./modules/haloSeason');
const { getPlayer } = require('./modules/haloPlayer');
app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    response.send('You have reached the GAME HIVE')
})

const season = require('./modules/haloSeason.js');
app.get('/haloSeason', season.getSeason);

const player = require('./modules/haloPlayer.js');
app.get('/haloPlayer', player.getPlayer);


app.get('/halo', async (req, res) => {
    const { authorization } = req.headers;
  
    
    let user = await verifyUser(authorization);
    if (!user) {
      res.sendStatus(401);
      return;
    }

    const location = req.query.location;

    const findQuery = {};
    // Only if the query includes location, add location to our filter
    if (location) {
      findQuery.location = location;
    }
    const halo = await Halo.find(findQuery);
  
    res.send(halo);
  })



  //adding a player from the front-end
  app.post('./addplayer', addPlayerHandler);
  function addPlayerHandler(req, res) {
    let { Gamertag, Rank } = req.body;
  }


const PORT = process.env.PORT;
if(!parseInt(PORT)) throw 'Invalid PORT';

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

async function postPlayer(req, res) {
  console.log('headers', req.headers);
  console.log('body', req.body);

  try {
    const newPlayer = await PLayer.create(req.body);
    res.send(newPlayer);
  }
  catch (err) {
    handleError(err, res);
  }
}

