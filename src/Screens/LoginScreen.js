import React, { useState } from 'react'
import {StyleSheet,Text,View,Image, TouchableOpacity, TextInput,} from 'react-native'
import { titles,Colors,btn1,hr80} from '../gloabals/style';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';
// import Entypo from '@expo/vector-icons/Entypo';



const LoginScreen = ({navigation}) => {
    const [emailfocus,setEmailfocus]=useState(false);
    const [passwordfocus,setPasswordfocus]=useState(false);
    const [showpassword,setShowpassword]=useState(false);

  
    return (
    <View style={Styles.container}>
       <Text style={Styles.head1} >LogIn</Text>
   <View style={Styles.inputout}>
   <FontAwesome name="user" size={24} color={emailfocus===true?Colors.text1:Colors.text2}/>
    <TextInput style={Styles.input} placeholder="Email"
       onFocus={() =>{
        setEmailfocus(true)
        setPasswordfocus(false)
       }}
    />
   </View>
   <View style={Styles.inputout}>
   <Entypo name="lock" size={24} color={passwordfocus===true?Colors.text1:Colors.text2} />
    <TextInput style={Styles.input} placeholder="Password"
    onFocus={() =>{
        setEmailfocus(false)
        setPasswordfocus(true)
        setShowpassword(false)
       }}
       secureTextEntry={showpassword===false?true:false}
       />
    <Octicons name={showpassword==false? "eye-closed":"eye"} size={24} color="black" onPress={()=>setShowpassword(true)}/>
   </View>
   <TouchableOpacity style={btn1} onPress={()=>navigation.navigate('home')}>
    <Text style={{color:Colors.col1,fontSize:titles.btntxt,fontWeight:"bold"}} >Sign in</Text>
   </TouchableOpacity>
   <Text style={Styles.forgot}>Forgot Password</Text>
   <Text style={Styles.or}>OR</Text>
   <Text style={Styles.gftext}>sign in with</Text>
<View style={Styles.gf}>
<TouchableOpacity>
    <View style={Styles.gficon}><AntDesign name="google" size={24} color="orange" /></View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={Styles.gficon}><Entypo name="facebook" size={24} color="blue" /></View>
   </TouchableOpacity>
   {/* <TouchableOpacity>
    <View style={Styles.gficon}><AntDesign name="github" size={24} color="black" /></View>
   </TouchableOpacity> */}
   <TouchableOpacity>
    <View style={Styles.gficon}><Entypo name="instagram" size={24} color="#ff00ff" /></View>
   </TouchableOpacity>
   {/* <TouchableOpacity>
    <View style={Styles.gficon}><AntDesign name="twitter" size={24} color="#00b7eb" /></View>
   </TouchableOpacity>
   <TouchableOpacity>
    <View style={Styles.gficon}><AntDesign name="youtube" size={24} color="red" /></View>
   </TouchableOpacity> */}
</View>
<View style={hr80}></View>
<Text style={Styles.signup} onPress={()=>navigation.navigate('signup')}>Don't have an account?
<Text>  Sign Up</Text></Text>

    </View>
  )
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ADD8E6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    head1: {
        fontSize: 50,
        color:Colors.text1,
        marginVertical: 30,
        textAlign: 'center',
    },
    inputout: {
        color:'black',
        flexDirection: 'row',
        width:'80%',
        marginVertical:10,
        backgroundColor:'white',
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:10,
       alignSelf: 'center',
       elevation:20,
    },
    input: {
        flex:1,
        fontSize:20,
        marginLeft:10,
        width:'80%',
        // color:'black',
    },
    forgot: {
        color:'white',
        marginTop:20,
        marginBottom:10,
    },
    or:{
        color:'white',
        marginVertical:10,
        fontWeight:'bold',
        
    },
    gftext:{
        color:'blue',
        marginVertical:10,
        fontSize:25,
    },
    gf:{
        flexDirection:'row',
    },
    gficon:{
        backgroundColor:'white',
        width:45,
        margin:10,
        borderRadius:10,
        padding:10,
        alignItems: 'center',
        elevation:10,
    },
    signup:{
        color:'white',
    },
});

export default LoginScreen
