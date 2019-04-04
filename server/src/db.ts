import * as TypeORM from 'typeorm'
import config from './config'

class AppNamingStrategy extends TypeORM.DefaultNamingStrategy {

    joinColumnName(relationName: string) {
        return relationName
    }

    joinTableColumnName(tableName: string) {
        return tableName
    }

}

const poolSize = 20
const connectionTimeoutMillis = 30000

const { db } = config

export default
    TypeORM.createConnection({
        entities: [`${__dirname}/model/*`],
        namingStrategy: new AppNamingStrategy(),
        logging: db.logs ? 'all' : false,
        extra: { max: poolSize, connectionTimeoutMillis },
        type: 'postgres',
        url: db.url })
    .then(connection => {
        const safeUrl = db.url.replace(/:.*@/, '@')
        console.log(`Connected to ${safeUrl}`)

        return connection
    })
    .catch(err => {
        throw new Error(`Unable to connect to the database: ${err}`)
    })
