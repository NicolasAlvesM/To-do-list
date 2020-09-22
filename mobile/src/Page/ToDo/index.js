import React, {useEffect, useState} from 'react';
import {Feather} from '@expo/vector-icons'
import {View, Platform,TouchableOpacity,TextInput,ScrollView} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles'
import Tarefas from '../../components/tarefas';
import api from '../../services/api';
function ToDo(){
  const [texto,setTexto]=useState('')
  const [dados,setDados]=useState([])
  useEffect(()=>{
    api.get('/').then(res=>{
      setDados(res.data)
    })
  },[])
  function updatedToDo(resData){
    const updatedArray=dados.map(item=>item._id==resData._id ? resData:item)
    setDados(updatedArray)
  }
  async function removeItem(e){
    const removedArray=dados.filter(item=>item._id!==e)
    setDados(removedArray)
  }
  const [date, setDate] = useState(new Date(Date.now()));
  async function createNewToDo(){
    const {data}=pickSelected ? await api.post('/',{todo:texto,setdata:date}) : await api.post('/',{todo:texto}) 
    setDados([...dados,data])
    setTexto('')
    setPickSelected(false)
  }
  const [pickSelected,setPickSelected]=useState(false)
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    setPickSelected(true)
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode('date');
  };
  const showTimepicker = () => {
    showMode('time');
  };
    return(
        <View style={styles.container}>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <ScrollView>
      <View style={styles.todoContainer}>
      {dados.map(item=>{
        return <Tarefas key={item._id} 
        funcUp={updatedToDo}
        id={item._id}
        todo={item.todo}
        date={item.date}
        func={removeItem}
        />
      })}
      </View>
      </ScrollView>
      <View style={styles.inputs}>
        <View style={styles.createAToDo}>
          <TextInput value={texto} onChangeText={(e)=>setTexto(e)} placeholder="Crie uma nova tarefa aqui" style={styles.textInput}/>
          <View style={styles.buttonsPicker}>
            <TouchableOpacity style={styles.button} onPress={showDatepicker} ><Feather name="calendar" size={35} color="#000" /></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={showTimepicker} ><Feather name="clock" size={35} color="#000" /></TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={createNewToDo} style={styles.inputButton}><Feather name="plus" size={25} color="#fff"/></TouchableOpacity>
    </View>
    )
}
export default ToDo