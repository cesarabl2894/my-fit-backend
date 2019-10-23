const UsersService = require('../models/services/users');
const encryptService = require('../models/services/encrypt');


class UsersCtrl {
    async addUser(request){
        const params = request.payload;
        const jsonResponse = { responseCode: 200 , responseMessage: '' };
        
        const user =await UsersService.getUserbyEmail(params.email);
        
        console.log(user);

        if(user.length > 0 ){
            jsonResponse.responseMessage = 'User already exists with email adddress.';
            jsonResponse.responseCode = 400;
            return jsonResponse;
        }
        const salt = await encryptService.generateSalt();
        const hashedPassword = await encryptService.hassPassword(params.password, salt);

        // // Reassigning params.password to new hashed password
        params.password = hashedPassword;
        
        const userInsert = await UsersService.addUser(params);
        jsonResponse.responseMessage = 'User Added Correctly';

        userInsert();
        return jsonResponse;

    }
}

module.exports = new UsersCtrl();