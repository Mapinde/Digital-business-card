import { StyleSheet,
  TextInput,
  Text, 
  View, 
  TouchableOpacity, 
  SafeAreaView, 
  KeyboardAvoidingView, 
  ScrollView, 
  Platform, 
  Keyboard,
  TouchableWithoutFeedback
 } from 'react-native'
import React, { useState } from 'react'
import InputComponent from "../components/InputCompenent"
import { Button } from 'react-native-elements'

const EditExperience = ({navigation,  route}) => {
  const {position, campany, periodo, date, local, description} = route.params;
    const [positionInput, SetPosition] = useState(position)
    const [campanyInput, SetCampany] = useState(campany)
  return (
    <>
    <SafeAreaView style={{flex:1, backgroundColor: "white"}}>
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            style={styles.container}
            keyboardVerticalOffset={90}
        >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{paddingTop: 15}}>
            <InputComponent 
            placeholder={"Posição"}
            label="Posição"
            autoFocus={true}
            type="text"
            setFunction={SetPosition}
            value={positionInput}
             />
             <InputComponent 
            placeholder={"Nome da Empresa"}
            label="Nome da Empresa"
            type="text"
            setFunction={SetCampany}
            value={campanyInput}
             />
        </ScrollView> 
        </TouchableWithoutFeedback>    

        </KeyboardAvoidingView>
    </SafeAreaView>
    </>
  )
}

export default EditExperience

const styles = StyleSheet.create({})