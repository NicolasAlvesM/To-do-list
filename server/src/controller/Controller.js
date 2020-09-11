const Todos=require('../database/Db')
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://nicolasalves:moreno22@cluster0.wr9sr.mongodb.net/todolist?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology: true})
module.exports =  class ToDoController{
    async index(req,res){
        const listOfTodos=await Todos.find()
        return res.json(listOfTodos)
    }
    async create(req,res){
        const {todo,time,day}=req.body
        await Todos.create({todo,time,day})
        return res.send()
    }
    async delete(req,res){
        const {id}=req.body
        await Todos.deleteOne(id)
        return res.send()
    }
}