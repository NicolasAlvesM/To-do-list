const Todos=require('../database/Db')
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://nicolasalves:moreno22@cluster0.wr9sr.mongodb.net/todolist?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify:false})
module.exports =  class ToDoController{
    async index(req,res){
        const listOfTodos=await Todos.find()
        return res.json(listOfTodos)
    }
    async create(req,res){
        const {todo,time,day,setdata}=req.body
        if(todo){
        if(setdata){
        const todoCreated=await Todos.create({todo,date:setdata})
        return res.json(todoCreated) 
        }
        if(time&&day){
        console.log(day+' cu '+time)
        const todoCreated=await Todos.create({todo,date})
        return res.json(todoCreated)
        }
        const todoCreated=await Todos.create({todo})
        return res.json(todoCreated)
        }
    }
    async delete(req,res){
        const {id}=req.params
        await Todos.findByIdAndDelete(id)
        return res.send()
    }
    async update(req,res){
        const {id}=req.params
        const {todo,time,day,setdate}=req.body
        if(setdate){
            await Todos.findByIdAndUpdate(id,{todo,date:setdate})  
            return res.json({_id:id,todo,date:setdate}) 
        }
        if(day&&time){
        const date=new Date(day+" "+time)
        await Todos.findByIdAndUpdate(id,{todo,date})  
        return res.json({_id:id,todo,date})
        }
        await Todos.findByIdAndUpdate(id,{todo})  
        return res.json({_id:id,todo})
    }
}