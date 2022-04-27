import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import CustomListItem from '../components/CustomListItem'



const ContactScreen = () => {
  const [chats,setChats] = useState([
    {
    id: "1",
    userName: "Onelio Mapinde",
    position: "Developer"
    },
    {
      id: "2",
      userName: "Ryan Mapinde",
      position: "Estudante"
    },
    {
      id: "3",
      userName: "Nathan Mapinde",
      position: "Estudante"
    },
    {
      id: "4",
      userName: "Zainabo Mapinde",
      position: "Tradutora"
    },
    {
      id: "5",
      userName: "Catija Gentivo",
      position: "RH"
    },
    {
      id: "6",
      userName: "Xarifo Gentivo",
      position: "Medico"
    },
    {
      id: "7",
      userName: "Neoleopordina Mateus",
      position: "Agronoma"
    },
    {
      id: "8",
      userName: "Legrand Mapinde",
      position: "Gestor"
    },
    {
      id: "9",
      userName: "Dercidio Massarongo",
      position: "Motorista"
    },
    {
      id: "10",
      userName: "Hilario Quive",
      position: "FrontEnd Developer"
    },
    {
      id: "11",
      userName: "Luciana Gentivo",
      position: "Contabilista"
    },
]);

  const enterChat = (id, userName, position) => {
    navigation.navigate("Chat", {
        id,
        userName,
        position,
    })
}
  return (
    <SafeAreaView>
        <ScrollView style={styles.container}>
            {chats.map(({id, userName, position})=>(
                <CustomListItem key={id} id={id} userName={userName} position={position} enterChat={enterChat} />
            ))}
        </ScrollView>
      
    </SafeAreaView>
  )
}

export default ContactScreen

const styles = StyleSheet.create({
  container:{
    height: "100%",
}
})