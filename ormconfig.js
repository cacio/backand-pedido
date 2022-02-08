module.exports = {
    "type":"postgres",
    "url":process.env.DATABASE_URL,
    "extra": {"ssl": { "rejectUnauthorized": false }},
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