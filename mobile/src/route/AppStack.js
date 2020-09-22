import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import ToDo from '../Page/ToDo';
import UpToDo from '../Page/UpdateToDo';
const Stack = createStackNavigator();
function AppStack(){
    return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ToDoList" component={ToDo} />
        <Stack.Screen options={{headerTitle:"Modifique sua tarefa"}} name="UpdateToDoList" component={UpToDo} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}
export default AppStack