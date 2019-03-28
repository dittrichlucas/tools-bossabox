import { pool as db } from '../model/db'

export class ToolService{

    async create(body: any){
        const { title, link, description, tags } = body
        const text = `INSERT INTO tools (title, link, description, tags)
            VALUES ($1, $2, $3, $4) RETURNING *`
        const values = [title, link, description, tags]

        await db.query(text, values)

        return { message: 'Created tool!' }
    }

    async delete(id: string){
        const text = 'DELETE * FROM tools WHERE id = $1'
        const value = [id]
        const query = await db.query(text, value)

        if (query){
            return { message: 'Tool removed!' }
        }

        return { message: 'Tool not found!'}
    }

    async find(tag?: string){
        if (tag){
            const text = 'SELECT * FROM tools WHERE tags LIKE $1'
            const value = [`%${tag}%`]
            const query = await db.query(text, value)

            if (query.rows.length === 0){
                return { message: 'Tools not found (findByTag)!' }
            } else {
                return query.rows
            }
        } else {
            return this.findAll()
        }
    }

    async findAll(){
        const text = 'SELECT * FROM tools'
        const query = await db.query(text)

        if (query.rows.length === 0){
            return { message: 'Tools not found (find)!' }
        } else {
            return query.rows
        }
    }

}