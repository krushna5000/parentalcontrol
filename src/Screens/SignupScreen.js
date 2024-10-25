import React, { useState } from 'react'
import {StyleSheet,Text,View,Image, TouchableOpacity, TextInput,} from 'react-native'
// import { titles ,Colors,btn1,hr80} from '../LogininSignupScreen/Style'
import { Colors,btn1,hr80,titles } from '../gloabals/style';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
// import Entypo from '@expo/vector-icons/Entypo';



const SignupScreen = ({navigation}) => {
    const [emailfocus,setEmailfocus]=useState(false);
    const [passwordfocus,setPasswordfocus]=useState(false);
    const [phonefocus,setphonefocus]=useState(false);
    const [namefocus,setnamefocus]=useState(false);


    const [showpassword,setShowpassword]=useState(false);
    const [showcpassword,setShowcpassword]=useState(false);
    const [cpasswordfocus,setcPasswordfocus]=useState(false);

  
    return (
    <View style={Styles.container}>
       <Text style={Styles.head1} >Sign Up</Text>


       
       <View style={Styles.inputout}>
   <FontAwesome name="user" size={20} color={namefocus===true?Colors.text1:Colors.text2}/>
    <TextInput style={Styles.input} placeholder="Full Name"
       onFocus={() =>{
        setnamefocus(true)
        setPasswordfocus(false)
        setphonefocus(false)
        setEmailfocus(false)
        setcPasswordfocus(false)
       }}
    />
   </View>




   <View style={Styles.inputout}>
   <Fontisto name="email" size={20} color={emailfocus===true?Colors.text1:Colors.text2} />
    <TextInput style={Styles.input} placeholder="Email"
       onFocus={() =>{
        setnamefocus(false)
        setPasswordfocus(false)
        setphonefocus(false)
        setEmailfocus(true)
        setcPasswordfocus(false)
       }}
    />
   </View>
{/*  */}
   {/* mobile number start */}
   <View style={Styles.inputout}>
   <FontAwesome name="phone" size={20} color={phonefocus===true?Colors.text1:Colors.text2} />
    <TextInput style={Styles.input} placeholder="Phone Number"
       onFocus={() =>{
        setphonefocus(true)
        setnamefocus(false)
        setPasswordfocus(false)
 
        setEmailfocus(false)
        setcPasswordfocus(false)
       }}
    />
   </View>
   {/* password start */}
   <View style={Styles.inputout}>
   <Entypo name="lock" size={20} color={passwordfocus===true?Colors.text1:Colors.text2} />
    <TextInput style={Styles.input} placeholder="Password"
    onFocus={() =>{
        setphonefocus(false)
        setnamefocus(false)
        setPasswordfocus(true)
       
        setEmailfocus(false)
        setcPasswordfocus(false)
       }}
       secureTextEntry={showpassword===false?true:false}
       />
    <Octicons name={showpassword==false? "eye-closed":"eye"} size={20} color="black" onPress={()=>setShowpassword(true)}/>
   </View>

   <View style={Styles.inputout}>
   <Entypo name="lock" size={20} color={cpasswordfocus===true?Colors.text1:Colors.text2} />
    <TextInput style={Styles.input} placeholder="Confirm Password"
    onFocus={() =>{
        setphonefocus(false)
        setnamefocus(false)
        setPasswordfocus(false)
       
        setEmailfocus(false)
        setcPasswordfocus(true)
       }}
       secureTextEntry={showcpassword===false?true:false}
       />
    <Octicons name={showcpassword==false? "eye-closed":"eye"} size={20} color="black" onPress={()=>setShowcpassword(true)}/>
   </View>
   {/* password end */}

   {/* <Text style={Styles.address}>Please enter your address here</Text>
        <View style={Styles.inputout}>
            <TextInput style={Styles.input1} placeholder="Enter Your Address" />
        </View> */}

   <TouchableOpacity style={btn1}>
    <Text style={{color:Colors.col1,fontSize:titles.btntxt,fontWeight:"bold"}}>Sign up</Text>
   </TouchableOpacity>
   <Text style={Styles.forgot}>Forgot Password</Text>
   <Text style={Styles.or}>OR</Text>
   {/* <Text style={Styles.gftext}>sign up with</Text> */}
<View style={Styles.gf}>
<TouchableOpacity>
    <View style={Styles.gficon}><AntDesign name="google" size={24} color="orange" /></View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={Styles.gficon}><Entypo name="facebook" size={24} color="blue" /></View>
   </TouchableOpacity>
   <TouchableOpacity>
    <View style={Styles.gficon}><Entypo name="instagram" size={24} color="#ff00ff" /></View>
   </TouchableOpacity>
 
</View>
<View style={hr80}></View>
<Text style={Styles.signup} onPress={()=>navigation.navigate('login')}>Already have anaccount?
<Text> signIn</Text></Text>

    </View>
  )
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ADD8E6',
        alignItems: 'center',
        marginTop:5,
        justifyContent: 'center',
    },
    head1: {
        fontSize: titles.title1,
        color:Colors.text1,
        marginVertical: 10,
        textAlign: 'center',
        marginTop:35,
        fontWeight:'bold',
    },
    inputout: {
        color:'black',
        flexDirection: 'row',
        width:'80%',
        marginVertical:10,
        backgroundColor:Colors.col1,
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
        color:Colors.text2,
        marginTop:20,
        marginBottom:5,
    },
    or:{
        color:Colors.text1,
        marginVertical:10,
        fontWeight:'bold',
        
    },
    gftext:{
        color:Colors.text2,
        marginVertical:0,
        fontSize:20,
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
        color:Colors.text1,
    },
});

export default SignupScreen
