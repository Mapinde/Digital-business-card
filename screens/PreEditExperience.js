import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {  SimpleLineIcons } from '@expo/vector-icons';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      position: 'Software Developer',
      campany: "FNB",
      periodo: "Tempo Inteiro",
      date: "Abril 2022 * 3Yrs 11 mos",
      local: "Maputo",
      description: "ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      position: 'RPG Developer',
      campany: "MOZA BANCO",
      periodo: "Tempo Inteiro",
      date: "jan 2018 - Abril 2022 * 3Yrs 11 mos",
      local: "Maputo",
      description: "ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      position: 'Software Developer',
      campany: "Millenium BIM",
      periodo: "Tempo Inteiro",
      date: "jan 2018 - Abril 2022 * 3Yrs 11 mos",
      local: "Maputo",
      description: "ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
  ];

  

const PreEditExperience = ({navigation, route}) => {
    const Item = ({ position,campany, periodo, date, local, description }) => (
        <View >
            <View style={styles.info}>
                <Image style={{width:60, 
                    height:60, 
                    resizeMode:"cover" }} 
                    source={{uri: "https://caprecruiter-production-static.s3.amazonaws.com/static/img/account_no_logo.png"}} />
                <View style={{flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",}}>
                    <Text style={styles.position}>{position}</Text>  
                    <TouchableOpacity activeOpacity={0.5} onPress={()=>{
                        navigation.navigate("EditExperience", {
                            position: position,
                            campany: campany,
                            periodo: periodo,
                            date: date,
                            local: local,
                            description: description,
                        })
                        }}
                    >
                    <SimpleLineIcons name="pencil" size={24} color="black" style={{paddingRight: 20}}  />
                </TouchableOpacity>
                </View>
                <View style={{}}>
                    <Text style={styles.campanyName}>{campany} * {periodo}</Text>   
                    <Text style={styles.period}>{date}</Text> 
                    <Text style={styles.local}>{local}</Text> 
                    <Text style={styles.description}>{description}</Text> 
                </View>
                
            </View>
            
                
            
        </View>
      );
    const renderItem = ({ item }) => (
        <Item position={item.position}
            campany={item.campany}
            periodo={item.periodo}
            date={item.date}
            local={item.local}
            description={item.description} />
      );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default PreEditExperience

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "#fff",
        padding: 10,
      },
      info:{
        flexDirection: "column",
        justifyContent: "flex-start",
        borderBottomColor: '#e2e3e3',
        borderBottomWidth: 1,
        paddingBottom: 10,
        paddingTop: 10,
    },
    position:{
        fontSize: 16,
        fontWeight: "bold",
    },
    period:{
        fontSize: 14,
        fontWeight: "normal",
        color: "#9A9C9B",
    },
    local:{
        fontSize: 14,
        fontWeight: "normal",
        color: "#9A9C9B",
    },
    campanyName:{
        fontSize: 14,
        fontWeight: "600",
    },
    description:{
        paddingTop: 5,
        fontSize: 14,
        fontWeight: "600",
    }

})