import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

const image = require('../assets/michael.jpg') ;

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            </ImageBackground>      
        </View>
        <View style={styles.containerDetails}>
            <View style={{alignItems: "center", justifyContent: "space-around", padding: 10}}>
                <Text style={{fontSize: 40, fontWeight: "bold", color: "#fff"}}>Onélio Mapinde</Text>
                <Text style={{fontSize: 20, fontWeight: "600", color: "#EC8014"}}>BackEnd Developer</Text>
                <Text style={{fontSize: 16, fontWeight: "bold", color: "#fff", paddingTop: 10}}>First National Bank</Text>
            </View>
            
        </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    imageContainer:{
        flex: 1,
        width: "100%",
        height: "40%",
        backgroundColor: "white",
    },
    containerDetails:{
        width: "100%",
        height: "60%",
        backgroundColor: "#090B32",
    },
    image:{
        width: "100%",
        height: "100%",
        justifyContent: "center",
    }
})