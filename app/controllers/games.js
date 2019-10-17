const Games = require('../models/services/games');
const GamesService = new Games();

class GamesCtrl {
    async getGames() {
        const games = await GamesService.getGames();
        console.log(games);
        return games;
    }
}

module.exports = GamesCtrl;