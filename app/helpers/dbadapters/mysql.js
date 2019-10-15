class Mysql {
    constructor(){
        this.user = process.env.MYSQL_USER;
        this.password = process.env.MYSQL_PASS;
        this.host = process.env.MYSQL_HOST;
        this.db = process.env.MYSQL_DB;
        this.mysql = require('mysql2/promise');
        this.conn = null;
        
    }

    async createConnection(){
        console.log(this);
        return await this.mysql.createConnection({
            host     : this.host,
            user     : this.user,
            password : this.password,
            database : 'cruddemo'
        });
    }

    async execute(query, options) {
        this.conn = this.conn || await this.createConnection();
        return this.conn.execute(query, options);
    }

    async close() {
        return this.conn.end();
    }
}

module.exports = Mysql;