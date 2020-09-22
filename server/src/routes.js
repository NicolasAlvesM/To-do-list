const express=require('express')
const ToDoController=require('./controller/Controller')
const routes=express.Router()
const toDoController=new ToDoController()
routes.get('/',toDoController.index)
routes.post('/',toDoController.create)
routes.delete('/:id',toDoController.delete)
routes.put('/:id',toDoController.update)
module.exports = routes