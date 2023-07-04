import 'reflect-metadata'
import Tool from '../model/tool'
import { ToolRepository } from '../repositories/tool'

export class ToolService {
    
    private readonly repository = ToolRepository
    
    async create(body: Tool){
        return this.repository.save(body)
    }

    async delete(id: string){
        const tool = await this.repository.findOneOrFail({ where: { id } })

        await this.repository.remove({ ...tool })

        return tool
    }

    async find(tag?: string){
        return this.repository.createQueryBuilder('tool')
            .where('tags ILIKE :tag', { tag: `%${tag}%` })
            .getMany()
    }

    async findAll(): Promise<Tool[]> {
        return this.repository.find()
    }

}
