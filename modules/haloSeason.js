const axios = require('axios');
const errorHandler = require('../errorHandler');

module.exports = { getSeason };

async function getSeason(request, response) {
    const appid = process.env.HALO_API_KEY;

    try {
        const seasonsResults = await axios.get('https://www.haloapi.com/metadata/h5/metadata/seasons', {
            headers: { 'Ocp-Apim-Subscription-Key': appid },
        });

        let activeSeason = seasonsResults.data.find(season => season.isActive);
        console.log('This is the first active season..............................', activeSeason);
        let season = new Season(activeSeason);
        response.send(season);

        // console.log('Here is the seasons info.........................................................!!', playlistResults.data);

        // let seasonData = seasonResults.data.season.map(season => new Season(season));

        // response.send(activeSeason);
    }
    catch (err) {
        errorHandler(err, response);
    }
}
//update this name
class Season {
    constructor(seasonData) {
        this.playlists = seasonData.playlists;
        this.playlistName = seasonData.playlists.name;
        this.playlistDescription = seasonData.playlists.description;
        this.playlistID = seasonData.playlists.id;
    }
}
