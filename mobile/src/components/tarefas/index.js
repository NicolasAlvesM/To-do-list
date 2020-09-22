import { useNavigation } from '@react-navigation/native'
import React,{useState} from 'react'
import {View,Text,CheckBox,TouchableOpacity} from 'react-native'
import api from '../../services/api'
import styles from './styles'
function Tarefas({id,todo,date,func,funcUp}){
    const data=new Date(date)
    const day=data.getDate()
    const month=data.getMonth()+1
    const year=data.getFullYear()
    const time=data.toLocaleTimeString()
    const[isSelected,setIsSelected]=useState(false)
    function handleSelected(){
        setIsSelected(!isSelected)
        if (!isSelected){
            func(id)  
            api.delete(`/${id}`)    
        }
    }
    const {navigate}=useNavigation()
    function changePage(){
        if(date)
        navigate('UpdateToDoList',{id,todo,date,funcUp})
        else
        navigate('UpdateToDoList',{id,todo,funcUp})
    }
    return(
        <TouchableOpacity onPress={changePage} style={styles.todoitem}>
            <CheckBox
            style={styles.checkb}
            value={isSelected}
            onChange={handleSelected}
            />
            <View style={styles.texts}>
                <Text style={styles.todo}>{todo}</Text>
                {day ? <Text style={styles.date}>{day+'/'+month+'/'+year}, {time}</Text> :
                <View/>}
            </View>
        </TouchableOpacity>
    )
}
export default Tarefas