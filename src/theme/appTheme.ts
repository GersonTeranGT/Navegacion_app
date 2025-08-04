import { StyleSheet, ImageBackground } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        marginHorizontal:20,
        marginVertical:10,

        //backgroundColor:'#fcfcfcff',
        padding:20,
        borderRadius:20,
    },
    title:{
        fontSize:30,
        marginVertical:10,
        color: '#4e534eff',
        textAlign:'justify'
    },
    buton:{
        marginVertical: 10,
    },
    texto:{
        fontSize:20,
        color: '#008cffff',
        fontWeight: 'bold'
    },
    buttonPerson:{
        width:100,
        height:80,
        backgroundColor:'#509FA6',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginRight:10
    },
    buttonTextPerson:{
        color:'white',
        fontSize:18,
        fontWeight:'bold'
    },
    avatar:{
        width:150,
        height:150,
        borderRadius:50,
        alignSelf:'center',
    },
    containerImage:{
        //backgroundColor:'red'
    },
    containerMenu:{
        backgroundColor:'red',
        marginVertical:20,
        marginHorizontal:20,
        
    },
    menuText:{
        fontSize:20,
        fontWeight:'bold',
    },
    menuButton:{
        marginVertical:10
    }
})