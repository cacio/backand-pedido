module.exports = {
    "type":"postgres",
    "url":process.env.HEROKU_POSTGRESQL_BLACK_URL,
    "ssl":false,
    "migrations":[
        "./dist/database/migrations/*.ts"
    ],
    "entities":[
        "./dist/models/*.ts"        
    ],
    "cli":{
        "migrationsDir":"./dist/database/migrations"
    }
}