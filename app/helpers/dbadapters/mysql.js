class Mysql {
    constructor(){
        this.user = process.env.MYSQL_USERNAME;
        this.pass = process.env.MYSQL_PASS;
        this.host = process.env.MYSQL_SERVER;
        this.pass = process.env.MYSQL_DB;
        this.mysql = require('mysql');
        this.conn = null;
        
    }

    async createConnection(){
        return await this.mysql.createConnection({
            host     : this.user,
            user     : this.user,
            password : this.pass,
            database : this.MYSQL_DB
        });
    }

    async execute(query, options) {
        this.conn = this.conn || await this.createConnection();
        return this.conn.query(query, options);
    }

    async close() {
        return this.conn.end();
    }
}

module.exports = Mysql;