import React from 'react'
import {StyleSheet,Text,View,Image, TouchableOpacity} from 'react-native'
// import logo from '../../../assets/logo.jpeg'
import logo from '../../assets/logo.png'
// import { Colors,hr80} from '../../globals/Style';
function WelcomeScreen({navigation}) {
  return (
   <View style={styles.container}>
    <Text style={styles.title}>Welcome to Hungry-Hopper</Text>
    <View style={styles.logout}>
        <Image source={logo} style={styles.logo}/>
        </View>
        {/* <View style={(hr80)}/> */}
        <Text styles={styles.text}>"Empowering You to Keep Your Family Safe in Digital World!"</Text>
        
        {/* <View style={(hr80)}/> */}
        <View style ={styles.btnout}>
            <TouchableOpacity onPress={()=>navigation.navigate('signup')}>
                 <Text style={styles.btn}>SignUp</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('login')}>
                 <Text style={styles.btn}>LogIn</Text>
            </TouchableOpacity>
        </View>
           </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ADD8E6',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
       fontSize: 50,
       color: 'blue',
       marginVertical:10,
       textAlign: 'center',
       fontWeight: 'bold',
    },
    logout:{
       width:'80%',
       height:'30%',
      // backgroundColor:'#fff',
       alignItems: 'center',
    },
    logo:{
           width:'100%',
           height:'100%'
    },
    btnout: {
      flexDirection:'row',
    },
    btn: {
       fontSize: 20,
       color: 'white',
       marginVertical: 30,
       marginHorizontal: 10,
       textAlign: 'center',
       fontWeight: 'bold',
       backgroundColor: 'blue',
       padding: 10,
       paddingHorizontal: 20,
       borderRadius: 10,
    },
})
export default WelcomeScreen
