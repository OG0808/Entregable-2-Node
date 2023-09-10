const  catchError = require ('../utils/catchError')
const Todo = require('../models/Todo')




const getAll = catchError(async(req, res) => {
    const result = await Todo.findAll()
    return res.json(result)
})

const create = catchError(async(req, res) => {
    const result = await Todo.create(req.body)
    return res.status(201).json(result)
})
const getOne = catchError(async(req, res) => {
    const {id} = req.params
    const results = await Todo.findByPk(id)
    if (!results) {
        return res.sendStatus(404)
    }
    return res.json(results)
})
const remove = catchError(async(req, res) => {
    const {id} = req.params
    const results = await Todo.destroy({where: {id} })
    if (!results) {
        return res.status(404)
    }
    return res.sendStatus(204)
})
const update = catchError(async(req, res) => {
    const {id} = req.params
    const results = await Todo.update(req.body, {where: {id}, returning: true })
    if (results[0] === 0 ) {
        return res.sendStatus(404)
    }
    return res.json(results[1][0])
})


module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update

}