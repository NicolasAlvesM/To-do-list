const express=require('express')
const mongoose = require("mongoose");
const cors =require('cors')
const Todos=require('./Db')
mongoose.connect("mongodb+srv://nicolasalves:moreno22@cluster0.wr9sr.mongodb.net/todolist?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology: true})
const app=express()
app.use(express.json())
app.use(cors())
app.post('/',async(req,res)=>{
    const {todo,time,day}=req.body
    await Todos.create({todo,time,day})
    return res.send()
})
app.get('/',async(req,res)=>{
    const listOfTodos=await Todos.find()
    return res.json(listOfTodos)
})
app.delete('/',async(req,res)=>{
    const {id}=req.body
    await Todos.deleteOne(id)
    return res.send()
})
app.listen(3333)