import { getManager } from 'typeorm'
import Tool from '../model/tool'

export class ToolService {

    private readonly repository = getManager().getRepository(Tool)

    async create(body: any){
        return await this.repository.save(body)
    }

    async delete(id: string){
        const tool = await this.repository.findOneOrFail(id)

        await this.repository.remove({ ...tool })

        return tool
    }

    async find(tag?: string){
        return this.repository.createQueryBuilder('tool')
            .where('tool.tags ILIKE :tag', { tag: `%${tag}%` })
            .getMany()
    }

    async findAll(){
        return this.repository.find()
    }

}
