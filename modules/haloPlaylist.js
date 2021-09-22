const axios = require('axios');
const errorHandler = require('../errorHandler');

module.exports = { getPlaylist };

async function getPlaylist(request, response) {
    const appid = process.env.HALO_API_KEY;

    try {
        const seasonsResults = await axios.get('https://www.haloapi.com/metadata/h5/metadata/seasons', {
            headers: { 'Ocp-Apim-Subscription-Key': appid },
        });

        let activeSeason = seasonsResults.data.find(season => season.isActive);
        console.log('This is the first active season..............................', activeSeason);

        // console.log('Here is the seasons info.........................................................!!', playlistResults.data);

        // let seasonData = seasonResults.data.season.map(season => new Season(season));

        response.send(activeSeason);
    }
    catch (err) {
        errorHandler(err, response);
    }
}

class Season {
    constructor(activeSeason) {
        this.name = seasonData.name;
        // this.description = playlistData.playlist[0].description;
    }
}
