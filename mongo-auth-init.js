const username = _getEnv('DB_OAUTH_USER')
const password = _getEnv('DB_OAUTH_PASSWORD')
const db_name = _getEnv('DB_OAUTH_NAME')


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