import Tool from '../model/tool'
import { ToolService } from '../services/tool'
import {
    Controller,
    Get,
    QueryParams,
    Post,
    BodyParams,
    Delete,
    PathParams,
    Inject
} from '@tsed/common'

@Controller("/tools")
export class ToolsController {

    @Inject(ToolService)
    private readonly service: ToolService

    @Get('/all')
    async getAllTools() {
        return this.service.findAll()
    }
    
    @Get()
    async getTools(@QueryParams('tag') tag: string) {
        return this.service.find(tag)
    }

    @Post()
    async createTool(@BodyParams('tool') tool: Tool) {
        return this.service.create(tool)
    }

    @Delete()
    async deleteTool(@PathParams('id') id: string) {
        return this.service.delete(id)
    }

}
