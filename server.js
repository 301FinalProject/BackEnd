'use strict';

require('dotenv').config();
const express = require('express');

const mongoose = require('mongoose');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection erro:'));
db.once('open', function () {
    console.log('Connected to Mongo!')
});

mongoose.connect(process.env.MONGODB_URL);

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

