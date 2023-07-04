import { DataSource } from 'typeorm'
import { registerProvider } from '@tsed/di'
import Tool from './model/tool'
import { Logger } from '@tsed/common'

export const POSTGRES_DATA_SOURCE = Symbol.for('PostgresDataSource')
export const PostgresDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'postgres', /* TODO: ver como adicionar um outro banco */
    synchronize: true,
    logging: true,
    entities: [Tool],
    subscribers: [],
    migrations: [],
})

registerProvider<DataSource>({
    provide: POSTGRES_DATA_SOURCE,
    type: 'typeorm:datasource',
    deps: [Logger],
    async useAsyncFactory(logger: Logger) {
        await PostgresDataSource.initialize()
        
        logger.info('Connected with TypeORM to database!')
        
        return PostgresDataSource
    },
    hooks: {
        $onDestroy(dataSource) {
            return dataSource.isInitialized && dataSource.destroy()
        }
    }
})
