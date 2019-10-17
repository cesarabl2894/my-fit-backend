const gamesDAO = require('../data/games');
const gamesData = new gamesDAO();

class GamesService {

    async getGames () {
        try{
            const games  = await gamesData.getGames();
            return games;
        }catch(error){
            throw('Something went wrong with the request');
        }
    }
}
    
module.exports = GamesService;