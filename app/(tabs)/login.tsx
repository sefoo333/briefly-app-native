import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useGoogleLogin } from '../auth/Googleauth';
import { auth, db } from '../config';
export default function Login() {

     const [password, setName] = useState('');
  const [email, setEmail] = useState('');
  const [register, SetRegister] = useState(false);

  // const handleSubmit = () => {
  //   console.log('Name:', name);
  //   console.log('Email:', email);
  //   setSubmitted(true);
  // };

  const signUp = async (email:string, password:string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User registered:", userCredential.user);
  } catch (error:any) {
    console.log("Signup error:", error.message);
  }
};

const addData = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: "Ahmed",
      age: 25,
      email: "ahmed@gmail.com"
    });
    console.log("✅ Document written with ID:", docRef.id);
  } catch (error) {
    console.error("❌ Error adding document:", error);
  }
};

const signInWithEmail = async (email:string, password:string) => {
 if (email && password) {
     try {const cleanEmail = email.trim().toLowerCase();
    const userCredential = await createUserWithEmailAndPassword(auth, cleanEmail, password);
    console.log("User signed in:", userCredential.user);
  } catch (error: any) {
    console.log("Login error:", error.message);
    alert(`${email} - ${password}`)
  }
} else {
  alert("Please enter both email and password");
}
};
const {navigate} = useNavigation();

  const [promptAsync, request]:any = useGoogleLogin();


  return (
     <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logo}>
        <Image source={require('@/assets/images/logo.png')} style={{ width: 200, height: 200 }} />
      </View>
      <View style={{ alignItems: 'center', marginVertical: 10 }}>
        <Text style={{ textAlign:"center" , fontSize:32 , fontFamily:"Lexend-700"}}>Login in to Birefly</Text>
        <Text style={{fontSize:17 , color:"#4a4a4a" , marginTop:3 , fontFamily:"Lexend-100"}}>Enter details to login your account</Text>
      </View>
       <View style={{marginTop:20}}> 
     {register && (
      <>
       <Text style={styles.label}>UserName</Text>
      <TextInput
        placeholder="Enter your UserName"
        onChangeText={setName}  
        style={styles.input}
      />
      </>
     )}
      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="Enter your Email"
        onChangeText={setName}
                keyboardType="email-address"
        style={styles.input}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="Enter your Password"
        onChangeText={setEmail}
        keyboardType="default"
              style={styles.input}

      />

          <TouchableOpacity  style={{
        backgroundColor: 'black',
        padding: 15,
borderRadius:9999      ,
   alignItems: 'center',
        marginTop: 20,

      }} onPress={() => !register ? signInWithEmail(email,password) : signUp(email,password)} >
<Text style={{ color: 'white', fontWeight: "600" , fontSize:17,fontFamily:"Lexend-600"}}>{register ? "Register" : "Login"}</Text>
      </TouchableOpacity>

      {/* {submitted && (
        <Text style={styles.confirmation}>
          Thank you, {name}! We will contact you at {email}.
        </Text>
      )} */}
    </View>

    <View style={{position:"relative" ,  marginTop:25 , alignItems:"center"}}>
        <Text style={{textAlign:"center" , fontSize:18 , color:"#c4c0bf"}}>or</Text>
        <View style={{position:"absolute" , left:"50%" , top:"50%" , transform:"translate(-50%,-50%)" , width:"100%" , height:1 , backgroundColor:"#eae5e4" , zIndex:-1}}></View>
    </View>
    <View style={{marginTop:20}}>
        <TouchableOpacity onPress={() => promptAsync()} style={{flexDirection:"row" , alignItems:"center" , justifyContent:"center" , gap:10 , padding:15 , backgroundColor:"#eae5e4" , borderRadius:9999}}>
            <Ionicons name='logo-google' size={22} />
            <Text style={{fontSize:16 , fontWeight:"600" , fontFamily:"Lexend-600"}}>Login in With Google</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("Tabs")} style={{flexDirection:"row" , marginTop:20 , alignItems:"center" , justifyContent:"center" , gap:10 , padding:15 , backgroundColor:"#eae5e4" , borderRadius:9999}}>
            <Ionicons name='logo-facebook' size={22} />
            <Text style={{fontSize:16 , fontWeight:"600" , fontFamily:"Lexend-600"}}>Login in With Google</Text>
        </TouchableOpacity>
    </View>
    <Text style={{textAlign:"center" , fontSize:16 , color:"#797979ff" , marginTop:20,fontFamily:"Lexend-600"}} onPress={() => SetRegister((e) => !e)}>
        Don't have an account? <Text style={{color:"#6C63FF" , fontWeight:"600" , fontFamily:"Lexend-600"}}>Sign Up</Text>
    </Text>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
    container:{paddingHorizontal:15 , paddingBottom:30 },
    logo:{ alignItems: 'center', marginVertical: 20 },
    input:{
        height:60,
        padding:15,
        paddingLeft:20,
        marginBottom: 20,
        borderRadius:9999,
        backgroundColor:"#f8f7f7ff",
        fontFamily:"Lexend-500"
    },
    label:{fontSize:18 , fontWeight:"600" , marginBottom:11 , fontFamily:"Lexend-600"}

})