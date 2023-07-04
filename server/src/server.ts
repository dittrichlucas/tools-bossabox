import 'reflect-metadata'
import { $log, Configuration, PlatformApplication } from '@tsed/common'
import { Inject, Injectable } from '@tsed/di'
import { POSTGRES_DATA_SOURCE } from './db'
import { DataSource } from 'typeorm'
import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'
import * as methodOverride from 'method-override'
import { ToolsController } from './controllers/tool'

@Configuration({
    httpPort: process.env.PORT || 8083,
    httpsPort: false,
    acceptMimes: ['application/json'],
    mount: {
        '/v1': [ToolsController]
    },
    swagger: {
        path: '/api-docs',
        spec: {
            securityDefinitions: {
                'auth:basic': {
                    type: 'basic'
                }
            }
        }
    }
})

@Injectable()
export class Server {

    @Inject()
    app: PlatformApplication

    @Inject(POSTGRES_DATA_SOURCE)
    protected postgresDataSource: DataSource

    $beforeRoutesInit() {
        this.app
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({
                extended: true
            }))
            .use(cookieParser.default())
            .use(methodOverride.default())

        return null
    }

    $onInit() {
        if (this.postgresDataSource.isInitialized) {
            $log.info('Database initialized!')
        }
    }
}
