const typeorm = require('typeorm');
const Users = require('../data/entities/user');
async function createConnection(){
    const connection = await typeorm.createConnection();
    return connection;
}

module.exports = createConnection;