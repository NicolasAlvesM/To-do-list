const express=require('express')
const ToDoController=require('./controller/Controller')
const routes=express.Router()
const toDoController=new ToDoController()
routes.get('/',toDoController.index)
routes.post('/',toDoController.create)
routes.delete('/',toDoController.delete)
module.exports = routes