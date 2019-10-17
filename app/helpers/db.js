const dbConfig = require('../config/db-config');
const Mysql = require('./dbadapters/mysql')

class db {
    getEnvironment() {
        return process.env.NODE_ENV;
    }
    
    getDBConfiguration(){
        const dbConfig = require('../config/db-config');
        return dbConfig;
    }

    async execute(sql, options, datasource = '') {
        const config = this.getDBConfiguration()[this.getEnvironment()][datasource];
        if(!config) throw(`Datasource '${datasource}' was not found on ${this.getEnvironment()} environment.`);

        let result;
        switch(config.engine){
            case "mysql":
                const adapter = new Mysql(config);
                result = await adapter.execute(sql, options);
                return result;
            break;
            case 'oracle':
            break;
            default:
                throw('Unhandled database type: ' + dbconfig.engine);
        }
    }
}

module.exports = db;