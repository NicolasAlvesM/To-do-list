import React from 'react'
import api from '../../services/api'
import './styles.css'
function ToDo(props){
    function removeToDo(e){
        const parent=e.target.parentNode
        setTimeout(()=>parent.remove(),500)
        api.delete('/',{id:e.target.id})
    }
    return(
        <div className="list">
        <input id={props.id} onClick={removeToDo} type="checkbox" className='check'/>
        <span>{props.todo}</span>
        <p>{props.time} {props.date}</p>
        {/* <button><img src="https://static.thenounproject.com/png/114046-200.png" alt=""/></button> */}
        </div>
    )
}
export default ToDo