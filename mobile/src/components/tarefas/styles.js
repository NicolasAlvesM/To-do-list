import {StyleSheet} from 'react-native'
const styles=StyleSheet.create({
    todoitem:{
        backgroundColor:'#fff',
        width:'100%',
        alignItems:'center',
        flexDirection:'row',
        paddingTop:10,
        paddingBottom:10,
        height:50,
        marginBottom:10,
        borderRadius:8,
        borderBottomWidth:2,
        borderBottomColor:'#00000055',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
    },
    texts:{
        marginLeft:5
    },
    todo:{
        fontSize:16
    },
    date:{
        color:'#0000ff66',
        fontSize:10
    }
})
export default styles