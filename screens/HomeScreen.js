import { StyleSheet, Text, View, TouchableOpacity , Image, ScrollView, SafeAreaView, StatusBar   } from 'react-native'
import React from 'react'
import { Button, BottomSheet } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign, Ionicons, SimpleLineIcons, FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { useEffect } from 'react';

const image = require('../assets/michael.jpg') ;

const HomeScreen = ({navigation, route, props}) => {
    
    const [nomeInput, SetNome] = useState("")
    const [apelidoInput, SetApelido] = useState("")
    const [positionInput, SetPosition] = useState("")
    const [cidadeInput, SetCidade] = useState("")
    const [paisInput, SetPais] = useState("")
    const [sobreInput, SetSobre] = useState("")
    const [interesseInput, SetInteresse] = useState("")

    const [ isPress, setIsPress ] = useState(false);
    const [currentColor, setCurrentColor] = useState("white");

    useEffect(()=>{
        SetNome("Onélio")
        SetApelido("Mapinde")
    }, [route])
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
        <View style={styles.imageContainer}>
            <Image source={image} resizeMode="cover" style={styles.image}/>     
        </View>
        <View style={[styles.containerDetails]}>
            <View style={{alignItems: "center", flexDirection: "row", justifyContent: "space-between", padding: 10}}>
                <Text style={{fontSize: 40, fontWeight: "bold", color: "#fff"}}>{nomeInput} {''} {apelidoInput}</Text>
                <TouchableOpacity activeOpacity={0.2} style={{paddingRight: 30}} onPress={()=> navigation.navigate("EditMain",{
                    nome: nomeInput,
                    apelido: apelidoInput,
                    position: "BackEnd Developer",
                    cidade: "Maputo",
                    pais: "Moçambique",
                    sobre: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
                    interesse: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"
                     })}>
                        <SimpleLineIcons name="pencil" size={24} color="white"  />
                </TouchableOpacity>
            </View>
            <View style={{alignItems: "center", justifyContent: "space-around", padding: 10}}>
            <Text style={{fontSize: 20, fontWeight: "600", color: "#EC8014"}}>BackEnd Developer</Text>
                <Text style={{fontSize: 16, fontWeight: "600", color: "#fff", paddingTop: 10}}>Maputo, Moçambique</Text>
            </View>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
            <Button onPress={()=>{ 
                if (currentColor === "white"){
                     setCurrentColor("#099B52")
                    }else{
                        setCurrentColor("white")
                    } }}
              title="Recruta me"
              icon={{
                name: 'work',
                type: 'Entypo',
                size: 15,
                color: 'black',
              }}
              iconContainerStyle={{ marginRight: 5 }}
              titleStyle={{ fontWeight: '700', color: "black" }}
              buttonStyle={[styles.recrutButton,{ backgroundColor: currentColor}]}
              containerStyle={{
                width: 200,
                marginHorizontal: 0,
                marginVertical: 10,
              }}
            />
            <Button
              title="Linkedin"
              icon={{
                name: 'tablet',
                type: 'Entypo',
                size: 15,
                color: 'white',
              }}
              iconContainerStyle={{ marginRight: 10 }}
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                backgroundColor: 'rgba(90, 154, 230, 1)',
                borderColor: 'transparent',
                marginLeft: 0,
                width: 100,
               
              }}
              containerStyle={{
                width: 120,
                marginHorizontal: 0,
                marginVertical: 10,
              }}
            />
             <Icon  name="qrcode" size={30} color="#D2CAC3" style={{width: 50}}/>
            </View>
            <View style={{padding: 10}}>
                <Text style={{fontSize: 25, fontWeight: "bold", color: "#fff"}}>Sobre</Text>
                <Text style={styles.introDescription}>
                    It is a long established fact that a reader will be distracted by the readable
                     content of a page when looking at its layout. The point of using Lorem Ipsum
                      is that it has a more-or-less normal distribution of letters, as opposed to 
                      using 'Content here, content here', making it look like readable English. 
                      Many desktop publishing packages and web page editors now use Lorem Ipsum
                       as their default model text, and a search for 'lorem ipsum' will uncover
                </Text>
            </View>
            <View style={{padding: 10}}>
                <Text style={{fontSize: 25, fontWeight: "bold", color: "#fff"}}>Interesse</Text>
                <Text style={styles.introDescription}>
                    It is a long established fact that a reader will be distracted by the readable
                     content of a page when looking at its layout. The point of using Lorem Ipsum
                      is that it has a more-or-less normal distribution of letters, as opposed to 
                      using 'Content here, content here', making it look like readable English. 
                      Many desktop publishing packages and web page editors now use Lorem Ipsum
                       as their default model text, and a search for 'lorem ipsum' will uncover
                </Text>
            </View>   
        </View>

        <View style={{flex: 1}}>
            <View style={styles.containerHeaderExperience}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>Experiencia</Text>
                </View> 
                <View style={styles.headerIcon}>
                    <TouchableOpacity activeOpacity={0.2}>
                        <AntDesign name="plus"  size={24} color="black" style={{paddingRight: 30}}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={()=>{
                        navigation.navigate("PreEditExperience")
                    }}>
                        <SimpleLineIcons name="pencil" size={24} color="black"  />
                    </TouchableOpacity>
                </View> 
            </View>
            <View style={styles.info}>
            <Image style={{width:60, 
                height:60, 
                resizeMode:"cover" }} 
                source={{uri: "https://caprecruiter-production-static.s3.amazonaws.com/static/img/account_no_logo.png"}} />
        <View style={{paddingLeft: 10, paddingRight: 10}}>
            <Text style={styles.position}>RPG Developer</Text>  
            <Text style={styles.campanyName}>Moza Banco * Tempo Inteiro</Text>   
            <Text style={styles.period}>Jun 2018 - Abril 2022 * 3 Yrs 11 mos</Text> 
            <Text style={styles.local}>Maputo</Text> 
            <Text style={styles.description}>many web sites still in their infancy. Various versions have evolved over the years, 
            sometimes by accident, sometimes on purpose (injected humour and the like).</Text> 
        </View>
        
        </View>
            <View style={styles.info}>
                <Image style={{width:60, 
                    height:60, 
                    resizeMode:"cover" }} 
                    source={{uri: "https://caprecruiter-production-static.s3.amazonaws.com/static/img/account_no_logo.png"}} />
                <View style={{paddingLeft: 10}}>
                    <Text style={styles.position}>BackEnd Developer</Text>  
                    <Text style={styles.campanyName}>FNB Moçambique * Tempo Inteiro</Text>   
                    <Text style={styles.period}>Jun 2018 - Abril 2022 * 3 Yrs 11 mos</Text> 
                    <Text style={styles.local}>Maputo</Text> 
                    <Text style={styles.description}>many web sites still in their infancy. Various versions have evolved over the years, 
                    sometimes by accident, sometimes on purpose (injected humour and the like).</Text> 
                </View>
            
            </View>
            <View style={styles.info}>
                <Image style={{width:60, 
                    height:60, 
                    resizeMode:"cover" }} 
                    source={{uri: "https://caprecruiter-production-static.s3.amazonaws.com/static/img/account_no_logo.png"}} />
                <View style={{paddingLeft: 10}}>
                    <Text style={styles.position}>Software Developer</Text>  
                    <Text style={styles.campanyName}>Millenium BIM * Tempo Inteiro</Text>   
                    <Text style={styles.period}>Jun 2018 - Abril 2022 * 3 Yrs 11 mos</Text> 
                    <Text style={styles.local}>Maputo</Text> 
                    <Text style={styles.description}>many web sites still in their infancy. Various versions have evolved over the years, 
                    sometimes by accident, sometimes on purpose (injected humour and the like).</Text> 
                </View>
            
            </View> 

        </View>    
        <View style={{flex: 1}}>
            <View style={styles.containerHeaderExperience}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>Educação</Text>
                </View> 
                <View style={styles.headerIcon}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign name="plus"  size={24} color="black" style={{paddingRight: 30}}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                        <SimpleLineIcons name="pencil" size={24} color="black"  />
                    </TouchableOpacity>
                </View> 
            </View>  
        <View style={styles.info}>
            <Image style={{width:60, 
                height:60, 
                resizeMode:"cover" }} 
                source={{uri: "https://pimnetwork.org/wp-content/uploads/2019/07/school_placeholder.jpg"}} />
            <View style={{paddingLeft: 10}}>
                <Text style={styles.position}>ISCTEM</Text>  
                <Text style={styles.campanyName}>Licenciatura * Eng. Informatica</Text>   
                <Text style={styles.period}>2010 - 2014</Text> 
            </View>
            
        </View>
            <View style={styles.info}>
                <Image style={{width:60, 
                    height:60, 
                    resizeMode:"cover" }} 
                    source={{uri: "https://pimnetwork.org/wp-content/uploads/2019/07/school_placeholder.jpg"}} />
                <View style={{paddingLeft: 10}}>
                    <Text style={styles.position}>ITC</Text>  
                    <Text style={styles.campanyName}>Medio * Sistemas Informaticos</Text>   
                    <Text style={styles.period}>2007 - 2010</Text> 
                </View>
            </View>
        </View>
        
        
        <View style={styles.containerHeaderExperience}>
              <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>Certifições</Text>
              </View> 
              <View style={styles.headerIcon}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign name="plus"  size={24} color="black" style={{paddingRight: 30}}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                        <SimpleLineIcons name="pencil" size={24} color="black"  />
                    </TouchableOpacity>
              </View> 
        </View>
        <View style={styles.info}>
            <Image style={{width:60, 
                height:60, 
                resizeMode:"cover" }} 
                source={{uri: "https://cdn-payscale.com/content/placeholder-images/certification-placeholder.png"}} />
            <View style={{paddingLeft: 10}}>
                <Text style={styles.position}>React.js: Building an Interface</Text>  
                <Text style={styles.campanyName}>Linkedin</Text>   
                <Text style={styles.period}>2021</Text> 
            </View>
        </View>
        <View style={styles.info}>
            <Image style={{width:60, 
                height:60, 
                resizeMode:"cover" }} 
                source={{uri: "https://cdn-payscale.com/content/placeholder-images/certification-placeholder.png"}} />
            <View style={{paddingLeft: 10}}>
                <Text style={styles.position}>React.js Essential Training</Text>  
                <Text style={styles.campanyName}>Linkedin</Text>   
                <Text style={styles.period}>2021</Text> 
            </View>
        </View>
        <View style={styles.info}>
            <Image style={{width:60, 
                height:60, 
                resizeMode:"cover" }} 
                source={{uri: "https://cdn-payscale.com/content/placeholder-images/certification-placeholder.png"}} />
            <View style={{paddingLeft: 10}}>
                <Text style={styles.position}>Introduçao a ciencias de dados</Text>  
                <Text style={styles.campanyName}>Linkedin</Text>   
                <Text style={styles.period}>2022</Text> 
            </View>
        </View>

        
    </ScrollView>
    <View style={styles.containerFooter}>

            <Icon name="facebook" size={30} color="#D2CAC3" style={{marginRight: 15}}/>
            <Icon name="linkedin" size={30} color="#D2CAC3" style={{marginRight: 15}} />
            <Icon name="twitter" size={30} color="#D2CAC3" style={{marginRight: 15}} />
            <Icon name="github" size={30} color="#D2CAC3" style={{marginRight: 15}} />
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#EBCDAF"
    },
    imageContainer:{
        width: "100%",
        height:250,
        backgroundColor: "white",
    },
    containerDetails:{
        width: "100%",
        backgroundColor: "#090B32",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: "hidden",
    },
    containerHeaderExperience:{
        width: "100%",
        marginTop: 10,
        backgroundColor: "#fff",
        overflow: "hidden",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    recrutButton:{    
        borderColor: 'transparent',
        marginLeft: 50,
        width: 130,
          
    },
    containerFooter:{
     
        width: "100%",
        height: 60,
        backgroundColor: "black",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        
    },
    introDescription:{fontSize: 14, fontWeight: "600", color: "#EBE7E3"},
    image:{
        ...StyleSheet.absoluteFillObject,
        height: 300,
        width: 400,
        justifyContent: "center",
    },
    headerTitle:{
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },
    headerContainer:{
         alignItems: "center",
         padding: 10,
    },
    headerIcon:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 20,
    },
    info:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        borderBottomColor: '#e2e3e3',
        borderBottomWidth: 1,
        backgroundColor: "#fff",
        padding: 10,
        
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
        paddingRight: 5,
        fontSize: 14,
        fontWeight: "600",
    }

    
})