const dbConfig = {
    "local":{
        "my-fit" : {
            "host": process.env.MYSQL_HOST,
            "user": process.env.MYSQL_USER,
            "password": process.env.MYSQL_PASSWORD,
            "database": process.env.MYSQL_DATABASE,
            "engine":'mysql'
        }
    }
}

module.exports = dbConfig;