import { PostgresDataSource } from '../db'
import Tool from '../model/tool'

export const ToolRepository = PostgresDataSource.getRepository(Tool)

