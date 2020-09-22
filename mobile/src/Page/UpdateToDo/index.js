import React,{useState} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import {Feather} from '@expo/vector-icons'
import {View,TextInput,TouchableOpacity,Text} from 'react-native'
import styles from './styles'
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
function UpToDo({route}){
    const {id,todo,date,funcUp}=route.params
    const data=new Date(date ? new Date(date):Date.now())
    const [dateUp,setDateUp]=useState(data)
    const [todoText,setTodoText]=useState(todo)
    const [mode, setMode] = useState('date');
    const [pickSelected,setPickSelected]=useState(false)
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || data;
    setShow(Platform.OS === 'ios');
    setDateUp(currentDate);
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
  const {navigate}=useNavigation()
  async function updateToDo(){
  const res=pickSelected ? await api.put(`/${id}`,{todo:todoText,setdate:dateUp}):await api.put(`/${id}`,{todo:todoText})
  setPickSelected(false)
  funcUp(res.data)
  navigate('ToDoList')  
  }
    return(
        <View style={styles.container}>
            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={dateUp}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
                />
             )}
            <TextInput style={styles.textinput} value={todoText} onChangeText={e=>{setTodoText(e)}}/>
            <View style={styles.buttonsEdit}>
            <TouchableOpacity style={styles.button} onPress={showDatepicker} ><Feather name="calendar" size={35} color="#000" /></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={showTimepicker} ><Feather name="clock" size={35} color="#000" /></TouchableOpacity>
             </View>
             <TouchableOpacity style={styles.saveButton} onPress={updateToDo}><Text>Salvar</Text></TouchableOpacity> 
        </View>
    )
}
export default UpToDo