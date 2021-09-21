const axios = require('axios');
const errorHandler = require('../errorHandler');

module.exports = {getPlaylist};

async function getPlaylist(request, response) {
    const appid = process.env.HALO_API_KEY;

    try {
        const playlistResults = await axios.get('https://www.haloapi.com/stats/h5/player-leaderboards/csr/46f2fe0c-8478-4593-82a3-bfb01c1cd63f/d34730b9-bb48-4569-bcdf-afba9c358019'), {
            header:  {'Ocp-Apim-Subscription-Key':  appid},
        };


    console.log('Here is the playlist info.........................................................!!', playlistResults.data.playlists);

    let playlistData = playlistResults.data.playlists.map(playlist => new playlist(playlist));

    response.send(playlistData);
}
catch(err) {
    errorHandler(err, response);
}
}

class Playlist {
    constructor(playlistData) {
        this.name = playlistData.playlist[0].name;
        this.description = playlistData.playlist[0].description;
    }
}
