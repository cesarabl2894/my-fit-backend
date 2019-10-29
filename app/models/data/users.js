const db = require('../../helpers/db');

class UsersDAO {
    async addUser(data){
        const user =  await db.execute(`INSERT INTO users (email, first_name, last_name, password, height, weight, role)
            VALUES (?,?,?,?,?,?,?);`,
            [
                data.email,
                data.first_name,
                data.last_name,
                data.password,
                data.height,
                data.weight,
                data.role
            ],
            'my-fit');
        return user;
    }
    async getUserbyEmail(email) {
        const user = await db.execute(`SELECT * FROM users WHERE email = ?`, [email], 'my-fit');
        return user;
    }
    
}

module.exports = new UsersDAO();