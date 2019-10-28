const UsersDAO = require('../data/users');

class UsersService {
    async addUser(data){
        const user = await UsersDAO.addUser(data);
        // console.log('data',data);
        return user;
    }
    getUserbyEmail(email) {
        try {
            const user = UsersDAO.getUserbyEmail(email);
            return user;
        }catch(error){
            throw(`Something went Wrong with the request ${error}`);
        }
    }
}

module.exports = new UsersService();