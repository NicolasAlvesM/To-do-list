import React, { useState } from 'react'
import api from '../../services/api'
import './styles.css'
function ToDo({id,date,todo,upFunc,children}){
    const [showUpdate,setShowUpdate]=useState(false)
    const [todoUp,setTodoUp]=useState(todo)
    const [dayUp,setDayUp]=useState('')
    const [timeUp,setTimeUp]=useState('')
    const data=new Date(date)
    function showUpdateToDo(){
        if(date){
            setDayUp(data.toJSON().split('T')[0])
            setTimeUp(data.toLocaleTimeString([], {timeStyle: 'short'}))
            }
        setShowUpdate(!showUpdate)
    }
    function upFunction(e){
        upFunc(e.target.id,{todo:todoUp,time:timeUp,day:dayUp})
        setShowUpdate(!showUpdate)
    }
    function removeToDo(e){
        const parent=e.target.parentNode
        setTimeout(()=>parent.parentNode.remove(),500)
        api.delete(`/${e.target.id}`)
    }
    return(
        <div className="list">
            <div className="todo-item">
                <input id={id} onClick={removeToDo} type="checkbox" className='check'/>
                <span>{todo}</span>
                {date ? <p>{data.toLocaleTimeString([], {timeStyle: 'short'})} {data.toLocaleDateString()}</p>:<p></p>}
                <button onClick={showUpdateToDo}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1200px-Edit_icon_%28the_Noun_Project_30184%29.svg.png" alt=""/></button>
            </div>
        {showUpdate ? 
        <div className="up-block">
            <input name='todoup' value={todoUp} onChange={e=>{setTodoUp(e.target.value)}} className='updateInput' type='text'/> 
            <div id='teste'>
            <input value={timeUp} onChange={e=>{setTimeUp(e.target.value)}} name='time' type='time'/>
            <input value={dayUp} onChange={e=>{setDayUp(e.target.value)}} name='date' type='date'/>
            <button id={id} onClick={upFunction}>Salvar</button>
            </div>
        </div>
        : <></>}
        </div>
    )
}
export default ToDo