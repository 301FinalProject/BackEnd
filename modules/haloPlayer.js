const axios = require('axios');
const errorHandler = require('../errorHandler');

module.exports = { getPlayer };

async function getPlayer(request, response) {
    const appid = process.env.HALO_API_KEY;
    const playlistID = request.query.id;

    try {
        const playlistResults = await axios.get('https://www.haloapi.com/stats/h5/player-leaderboards/csr/46f2fe0c-8478-4593-82a3-bfb01c1cd63f/d34730b9-bb48-4569-bcdf-afba9c358019', {
            
        params: {
                id: playlistID,
            },

            headers: { 'Ocp-Apim-Subscription-Key': appid },
        });
        console.log('I have hit the API..........................................!!!!!', playlistResults);
        
        let selectedPLaylist = playlistResults.data.Results.map(playlist => new Playlist(playlist));
        console.log('These are the players for the playlist..............................', selectedPLaylist);

        response.send(selectedPLaylist);
    }
    catch (err) {
        errorHandler(err, response);
    }
}
//update this name
class Playlist {
    constructor(selectedPLaylist) {
        this.playerName = selectedPLaylist.Player.Gamertag;
        this.playerRank = selectedPLaylist.Rank;
    }
}
