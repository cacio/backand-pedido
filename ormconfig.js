module.exports = {
    "type":"postgres",
    "url":process.env.DATABASE_URL,
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