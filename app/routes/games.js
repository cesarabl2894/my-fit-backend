const GamesService = require('../models/services/games');
const GamesFn = new GamesService();

module.exports = [
    {
        method: 'GET',
        path: '/games',
        handler: GamesFn.getGames,
        options: {            
            tags: ['api']
        },
    }
];