const axios = require('axios');
const errorHandler = require('../errorHandler');

module.exports = { getPlayer };

async function getPlayer(request, response) {
    const appid = process.env.HALO_API_KEY;
    const playlistID = 

    try {
        const playlistResults = await axios.get('https://www.haloapi.com/stats/h5/player-leaderboards/csr/46f2fe0c-8478-4593-82a3-bfb01c1cd63f/d34730b9-bb48-4569-bcdf-afba9c358019', {
            params: {
                id: 
            }

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
//update this name
class Season {
    constructor(activeSeason) {
        this.name = seasonData.name;
        this.description = seasonData.description;
        this.id = seasonData.id;
        // this.description = playlistData.playlist[0].description;
    }
}
