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

const mongoose = require('mongoose');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    console.log('Connected to Mongo!')
});

mongoose.connect(process.env.MONGODB_URI);

const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    response.send('You have reached the GAME HIVE')
})

const PORT = process.env.PORT;
if(!parseInt(PORT)) throw 'Invalid PORT';

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

