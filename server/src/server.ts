import { ServerSettings, ServerLoader, GlobalAcceptMimesMiddleware } from '@tsed/common'
import cookieParser from 'cookie-parser'
import methodOverride from 'method-override'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import 'reflect-metadata'


@ServerSettings({
    rootDir: __dirname,
    acceptMimes: ['application/json']
})
export class Server extends ServerLoader {
    /**
     * This method let you configure the express middleware required by your application to works.
     * @returns {Server}
     */
    public $onMountingMiddlewares() {
        this
            .use(morgan('dev'))
            .use(GlobalAcceptMimesMiddleware)
            .use(cookieParser())
            .use(methodOverride())
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({
                extended: true
            }));
    }

    public $onReady(){
        console.log('Server started...');
    }

    public $onServerInitError(err: Error){
        console.error(err);
    }
}
