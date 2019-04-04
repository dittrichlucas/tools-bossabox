import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import connection from './db'
import 'reflect-metadata'
import toolRouter from './routes/tool'

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())

app.use('/tools', toolRouter)


connection.then(() =>
    app.listen(3000, (error: any) => {
        console.log('Server listening on port 3000.')
        if(error){
            console.log(`Erro ${error}`)
        }
    })
)

export default app
