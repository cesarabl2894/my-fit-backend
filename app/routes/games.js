const Mysql = require('../helpers/dbadapters/mysql');
const db = new Mysql();


// console.log(games);

async function getGames() {
    const games = await db.execute('SELECT * FROM Game',[]);
    return games;
}
// const games = [
//     {
//         name: 'The Legend of Zelda',
//         releaseYear: 1995,
//         developer: 'Gamefreak',
//         price: 50,
//         decription: 'LoremIpsum'
//     }
// ];

// console.log(process.env.PORT);

// const getGames = () => {
//     return games;
// }

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