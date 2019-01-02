import { Pool } from 'pg'
import { any } from 'bluebird';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '123456',
    port: 5432
})

const createTable = `
    -- Create tools table
    CREATE TABLE tools (
        id serial PRIMARY KEY,
        title text NOT NULL,
        link text NOT NULL,
        description text NOT NULL,
        tags text NOT NULL
    );

`

export const init = any([pool.query('DROP TABLE tools')])
    .catch(() => {})
    .then(() => pool.query(createTable))
    .then(() => {
        console.log('Tables created successfully!')
    })
    .catch((err: Error) => {
        console.log(`Failed to create table, error ${err.message}`)
    })
