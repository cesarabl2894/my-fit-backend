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
        return await this.mysql.createConnection({
            host     : this.host,
            user     : this.user,
            password : this.password,
            database : this.db
        });
    }

    async execute(query, options) {
        this.conn = this.conn || await this.createConnection();
        const [ rows ] =  await this.conn.execute(query, options);
        return rows;
    }

    async close() {
        return this.conn.end();
    }
}

module.exports = Mysql;