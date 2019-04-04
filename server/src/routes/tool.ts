import express from 'express'
import { ToolService } from '../services/tool'

const router = express.Router()

const service = new ToolService()

router.get('/', async (req, res) => {
    try {
        res.send(await service.find(req.query.tag))
    } catch(error) {
        res.status(400).send(error)
    }
})

router.post('/', async (req, res) => {
    try {
        res.send(await service.create(req.body))
    } catch(error) {
        console.log(error)
        res.status(400).send({ message: 'Campos obrigatórios não preenchidos' })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        res.send(await service.delete(req.params.id))
    } catch(error) {
        res.status(404).send(error)
    }
})

export default router
