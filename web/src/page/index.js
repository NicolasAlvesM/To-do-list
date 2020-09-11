import React, { useEffect,useState } from 'react'
import ToDo from '../components/todo'
import api from '../services/api'
import './styles.css'
function ToDoList(){
    const [allList,setAllList]=useState([])
    const [todo,setTodo]=useState([])
    const [time,setTime]=useState([])
    const [day,setDay]=useState([])
    useEffect(()=>{
        api.get("/").then(response=>{
            const {data}=response
            setAllList(data)
        })
    },[])
    async function createNewToDo(){
        await api.post('/',{todo,time,day})     
        setAllList([...allList,{todo,time,day}])
    }
    return(
        <div className='container'>
            <div className="todo">
                <h1>TO DO LIST</h1>
                <input onChange={e=>{setTodo(e.target.value)}} value={todo} className='input' placeholder='Afazeres'/>
                <div className='input-block'>
                <input onChange={e=>{setTime(e.target.value)}} value={time} name='time' type='time'/>
                <input onChange={e=>{setDay(e.target.value)}} value={day} name='date' type='date'/>
                <input onClick={createNewToDo} value='SALVAR' type='submit'/>
                </div>
                <div className="todolist">
                {allList.map(item=>{
                    return(
                    <ToDo 
                        key={item._id}
                        id={item._id}
                        todo={item.todo} 
                        time={item.time}
                        date={item.day}
                    />)
                })}
                </div>
            </div>
        </div>
    )
}
export default ToDoList