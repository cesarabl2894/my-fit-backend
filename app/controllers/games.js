const GamesService = require('../models/services/games');

class GamesCtrl {
    async getGames() {
        const games = await GamesService.getGames();
        return games;
    }
}

module.exports = new GamesCtrl();