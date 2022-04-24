import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Input } from 'react-native-elements'

const InputCompenent = ({placeholder, value, autoFocus, type, iconType, iconName, setFunction, security, label, style}) => {
    
  return (
    <View style={styles.container}>
      <Input style={style}
            placeholder={placeholder}
            autoFocus = {autoFocus}
            secureTextEntry = {security}
            type={type}
            leftIcon={{type: iconType, name: iconName }}
            value={value}
            label={label}
            labelStyle={{fontWeight: "normal", fontSize: 14}}
            onChangeText={(text)=> setFunction(text)}
        />
    </View>
  )
}

export default InputCompenent

const styles = StyleSheet.create({
    container:{
        width: "100%",
        padding: 10, 
    },
})