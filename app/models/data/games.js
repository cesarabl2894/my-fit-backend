const adapter = require('../../helpers/db');
class Games {
    constructor() {
        this.db = new adapter();
    }
    async getGames() {
        const games = await this.db.execute('SELECT * FROM Game',[],'games');
        return games;
    }
    
}


module.exports = Games;

