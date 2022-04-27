import { StyleSheet, View, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { Input, Text, Button } from 'react-native-elements'
import InputCompenent from '../components/InputCompenent'
import { StatusBar } from 'expo-status-bar'

const SignUpScreen = () => {
    const [firstName, setFristName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const register = async() => {
        
    };
  return (
      <ScrollView>
          <StatusBar style='light' />
          <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <Text h3 style={{marginBottom:20}}>
          Criar uma conta no Recruta Me!
      </Text>
      <View style={styles.inputContainer}>
        <InputCompenent
            placeholder="Pedro"
            label={"Primeiro Nome"}
            autoFocus = {true}
            type="text"
            value={firstName}
            setFunction={setFristName}
        />
        <InputCompenent
            placeholder="Nhantumbo"
            label={"Ultimo Nome"}
            autoFocus = {false}
            type="text"
            value={lastName}
            setFunction={setLastName}
        />
        <InputCompenent
            placeholder="pedro.nhantumbo@gmail.com"
            type="email"
            label={"Email"}
            value={email}
            setFunction={setEmail}
        />
        <InputCompenent
            placeholder="+258824215357"
            type="text"
            label={"Telefone"}
            value={telefone}
            setFunction={setTelefone}
        />
        <InputCompenent
            placeholder="Password"
            secureTextEntry = {true}
            type="password"
            label={"Password"}
            value={password}
            setFunction={setPassword}
        />
        <InputCompenent
            placeholder="Profile Picture url (optional)"
            type="text"
            value={imageUrl}
            label="Foto"
            setFunction={ setImageUrl}
            onSubmitEditing={register}
        />
      </View>
      <Button disabled={!firstName && !lastName && !email && !telefone && !password}
            title="Criar conta" 
            containerStyle={styles.button} 
            onPress={register} 
            />
    </KeyboardAvoidingView>
      </ScrollView>
    
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding:10,
    },
    button:{
        width: 200,
        marginTop: 10,
    },
    inputContainer:{
        width:300,
    }
})