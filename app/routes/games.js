const games = [
    {
        name: 'The Legend of Zelda',
        releaseYear: 1995,
        developer: 'Gamefreak',
        price: 50,
        decription: 'LoremIpsum'
    }
];

const getGames = () => {
    return games;
}

module.exports = [
    {
        method: 'GET',
        path: '/games',
        handler: (request, h) => {
            return games
        },
        options: {            
            tags: ['api']
        },
    }
];