const Mysql = require('../helpers/dbadapters/mysql');
const db = new Mysql();

async function getGames() {
    const games = await db.execute('SELECT * FROM Game',[]);
    return games;
}

module.exports = [
    {
        method: 'GET',
        path: '/games',
        handler: getGames,
        options: {            
            tags: ['api']
        },
    }
];