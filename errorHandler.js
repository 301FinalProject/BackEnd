// const { response } = require("express");

module.exports = function(err, response) {
    console.error('axios error!', err);
    response.status(500).send('This is a Status 500');
    };
