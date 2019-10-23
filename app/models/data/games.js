const db = require('../../helpers/db');
class GamesDAO {
    async getGames() {
        const games = await db.execute('SELECT * FROM Game',[],'games');
        return games;
    }
    
}


module.exports = new GamesDAO();

