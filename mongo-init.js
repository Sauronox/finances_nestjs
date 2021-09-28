let username = _getEnv('DB_FINANCE_USER')
let password = _getEnv('DB_FINANCE_PASSWORD')
let db_name = _getEnv('DB_FINANCE_NAME')


let dbf = db.getSiblingDB(db_name);

dbf.createCollection('blank');

dbf.createUser(
    {
        user: username,
        pwd: password,
        roles: [
            {
                role: "readWrite",
                db: db_name
            }
        ]
    }
);
dbf.blank.insert({ myfield: 'initialisation'})

username = _getEnv('DB_AUTH_USER')
password = _getEnv('DB_AUTH_PASSWORD')
db_name = _getEnv('DB_AUTH_NAME')


dbf = db.getSiblingDB(db_name);

dbf.createCollection('blank');

dbf.createUser(
    {
        user: username,
        pwd: password,
        roles: [
            {
                role: "readWrite",
                db: db_name
            }
        ]
    }
);
dbf.blank.insert({ myfield: 'initialisation'})