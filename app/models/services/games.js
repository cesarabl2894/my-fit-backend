const gamesDAO = require('../data/games');

class GamesService {

    async getGames () {
        try{
            const games  = await gamesDAO.getGames();
            return games;
        }catch(error){
            throw('Something went wrong with the request');
        }
    }
}
    
module.exports = new GamesService();