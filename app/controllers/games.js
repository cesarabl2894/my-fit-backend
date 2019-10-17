const GamesService = require('../models/services/games');

class GamesCtrl {
    async getGames() {
        const games = await GamesService.getGames();
        console.log(games);
        return games;
    }
}

module.exports = new GamesCtrl();