// const UsersDAO = require('../data/users');
const createConnection = require('../helpers/connection');
const Users = require('../data/entities/user');

class UsersService {
    async addUser(data){
        const user = await UsersDAO.addUser(data);
        const userRepository = await createConnection();
        // console.log('data',data);
        return user;
    }
    async getUserbyEmail(email) {
        try {
            const connection = await createConnection();
            const userRepository = await connection.getRepository(Users);
            const user = await userRepository.findOne({email});
            console.log(user);
            return user;
        }catch(error){
            console.log(error)
            throw(`Something went Wrong with the request ${error}`);
        }
    }
}

module.exports = new UsersService();