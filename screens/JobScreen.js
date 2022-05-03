import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'

const JobScreen = () => {
  return (
    <SafeAreaView>
        <ScrollView style={styles.container}>
          <View style={styles.jobcard}>
            <Image style={{width:60, 
                height:60, 
                resizeMode:"cover" }} 
                source={{uri: "https://clubofmozambique.com/wp-content/uploads/2017/10/fnb-logo-2016.jpg"}} />
            <View style={{paddingLeft: 5}}>
                <Text style={styles.position}>RPG Developer</Text> 
                <Text style={styles.campany}>First National Bank</Text>
                <Text style={styles.local}>Maputo</Text>
                <Text style={styles.type}>Remote</Text>
                <Text style={styles.postDate}>27-04-22</Text>
            </View>
          </View>
          <View style={styles.jobcard}>
            <Image style={{width:60, 
                height:60, 
                resizeMode:"cover" }} 
                source={{uri: "https://mozambiqueoilmining.com/wp-content/uploads/2020/03/standar-bank.png"}} />
            <View style={{paddingLeft: 5}}>
                <Text style={styles.position}>Data Engineer</Text> 
                <Text style={styles.campany}>Standard Bank</Text>
                <Text style={styles.local}>Maputo</Text>
                <Text style={styles.type}>Office</Text>
                <Text style={styles.postDate}>27-04-22</Text>
            </View>
          </View>
          <View style={styles.jobcard}>
            <Image style={{width:60, 
                height:60, 
                resizeMode:"cover" }} 
                source={{uri: "https://superbrands.co.mz/wp-content/uploads/2018/02/bci-logo-300x300.jpg"}} />
            <View style={{paddingLeft: 5}}>
                <Text style={styles.position}>BackEnd Developer</Text> 
                <Text style={styles.campany}>BCI</Text>
                <Text style={styles.local}>Maputo</Text>
                <Text style={styles.type}>Office</Text>
                <Text style={styles.postDate}>27-04-22</Text>
            </View>
          </View>
          
        </ScrollView>
      
    </SafeAreaView>
  )
}

export default JobScreen

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  jobcard:{
      backgroundColor: "#fff",
      flexDirection: "row",
      alignItems: "stretch",
      justifyContent: "flex-start",
      padding: 10,
      borderBottomColor: '#e2e3e3',
    borderBottomWidth: 1,
  },
  position: {
      fontSize: 16,
      fontWeight: "bold",
  },
  campany: {
    fontWeight: "normal",
    color: "#9A9C9B",
    fontSize: 14,
  },
  local:{
    fontWeight: "normal",
    color: "#9A9C9B",
  },
  type:{
    fontWeight: "normal",
    color: "#9A9C9B",
  },
  postDate:{
    fontWeight: "normal",
    fontSize: 12,
    paddingTop: 10
  }


})