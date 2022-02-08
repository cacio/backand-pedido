module.exports = {    
    "type":"postgres",
    "url":process.env.DATABASE_URL,
    "extra": {"ssl": { "rejectUnauthorized": true }},
    "migrations":[
        "./dist/database/migrations/*.js"
    ],
    "entities":[
        "./dist/models/*.js"        
    ],
    "cli":{
        "migrationsDir":"./dist/database/migrations"
    }
}