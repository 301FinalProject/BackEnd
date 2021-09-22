const axios = require('axios');
const errorHandler = require('../errorHandler');

module.exports = {getPlaylist};

async function getPlaylist(request, response) {
    const appid = process.env.HALO_API_KEY;

    try {
        const playlistResults = await axios.get('https://www.haloapi.com/stats/h5/player-leaderboards/csr/46f2fe0c-8478-4593-82a3-bfb01c1cd63f/d34730b9-bb48-4569-bcdf-afba9c358019', {
            headers:  {'Ocp-Apim-Subscription-Key': appid},
    });


    console.log('Here is the playlist info.........................................................!!', playlistResults.data.results);

    let playlistData = playlistResults.data.results.map(player => new Playlist(playlist));

    response.send(playlistData);
}
catch(err) {
    errorHandler(err, response);
}
}

class Playlist {
    constructor(playlistData) {
        this.name = playlistData.playlist;
        // this.description = playlistData.playlist[0].description;
    }
}
