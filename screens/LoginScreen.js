import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, Icon, Image, Input } from 'react-native-elements'

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password,setPassowrd] = useState('');

    const signIn = () =>{
        navigation.navigate("Home");
    };
  return (
    <KeyboardAvoidingView behavior={Platform.OS=== 'ios' ? "padding" : undefined} enabled style={styles.container}>
        <StatusBar style='light' />
      <Image
      source={{
          uri: "https://i.pinimg.com/736x/75/7a/e5/757ae576865c22b69efe72f9f769c60e.jpg",
      }}
      style={{width:200, height:200}} />
      <View style={styles.inputContainer}>
           <Input 
            placeholder="Email"
            autoFocus
            type="email"
            value={email}
            onChangeText={(text)=> setEmail(text)} />
           <Input 
                placeholder="Password" 
                secureTextEntry 
                type="password"
                value={password}
                onChangeText={(text)=> setPassowrd(text)}
                onSubmitEditing={signIn} /> 
      </View>
      <View>
          <Button 
            title="Login" 
            containerStyle={styles.button} 
            onPress={signIn} 
            />
          <Button 
            title="Registrer" 
            containerStyle={styles.button} 
            onPress={()=> navigation.navigate("SignUp")} 
            type="outline"
            />
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding:10,
        backgroundColor: "white"
    },
    inputContainer:{
        width: 300
    },
    button:{
        width: 200,
        marginTop: 10
    }
})