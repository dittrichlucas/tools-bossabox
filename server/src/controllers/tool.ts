import express from 'express'
import { ToolService } from '../services/tool'
import { Controller, Get, QueryParams, Post, BodyParams, Delete, PathParams } from '@tsed/common';

export interface Tool {
    title: string
    link: string
    description: string
    tags: string
}

@Controller("/tools")
export class ToolsController {

    private readonly service = new ToolService()

    @Get("/")
    async getTools(@QueryParams('tag') tag: string) {
        return this.service.find(tag)
    }

    @Post('/')
    async createTool(@BodyParams('tool') tool: Tool) {
        return this.service.create(tool)
    }

    @Delete('/')
    async deleteTool(@PathParams('id') id: string) {
        return this.service.delete(id)
    }

}
