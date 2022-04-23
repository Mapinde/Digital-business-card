import { StyleSheet, Text, View, TouchableOpacity , Image, ScrollView, SafeAreaView, StatusBar   } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign, Ionicons, SimpleLineIcons, FontAwesome } from '@expo/vector-icons';

const image = require('../assets/michael.jpg') ;

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
        <View style={styles.imageContainer}>
            <Image source={image} resizeMode="cover" style={styles.image}/>     
        </View>
        <View style={styles.containerDetails}>
            <View style={{alignItems: "center", justifyContent: "space-around", padding: 10}}>
                <Text style={{fontSize: 40, fontWeight: "bold", color: "#fff"}}>Onélio Mapinde</Text>
                <Text style={{fontSize: 20, fontWeight: "600", color: "#EC8014"}}>BackEnd Developer</Text>
                <Text style={{fontSize: 16, fontWeight: "600", color: "#fff", paddingTop: 10}}>Maputo, Moçambique</Text>
            </View>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
            <Button
              title="Email"
              icon={{
                name: 'email',
                type: 'Entypo',
                size: 15,
                color: 'black',
              }}
              iconContainerStyle={{ marginRight: 10 }}
              titleStyle={{ fontWeight: '700', color: "black" }}
              buttonStyle={{
                backgroundColor: 'white',
                borderColor: 'transparent',
                marginLeft: 50,
                width: 100,
              }}
              containerStyle={{
                width: 150,
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
                marginLeft: 20,
                width: 100,
               
              }}
              containerStyle={{
                width: 150,
                marginHorizontal: 0,
                marginVertical: 10,
              }}
            />
             <Icon  name="qrcode" size={30} color="#D2CAC3" style={{width: 50}}/>
            </View>
            <View style={{padding: 10}}>
                <Text style={{fontSize: 25, fontWeight: "bold", color: "#fff"}}>About</Text>
                <Text style={{fontSize: 14, fontWeight: "600", color: "#EBE7E3", marginBottom: 10}}>
                    It is a long established fact that a reader will be distracted by the readable
                     content of a page when looking at its layout. The point of using Lorem Ipsum
                      is that it has a more-or-less normal distribution of letters, as opposed to 
                      using 'Content here, content here', making it look like readable English. 
                      Many desktop publishing packages and web page editors now use Lorem Ipsum
                       as their default model text, and a search for 'lorem ipsum' will uncover
                </Text>
            </View>
            <View style={{padding: 10}}>
                <Text style={{fontSize: 25, fontWeight: "bold", color: "#fff"}}>Interests</Text>
                <Text style={{fontSize: 14, fontWeight: "600", color: "#EBE7E3"}}>
                    It is a long established fact that a reader will be distracted by the readable
                     content of a page when looking at its layout. The point of using Lorem Ipsum
                      is that it has a more-or-less normal distribution of letters, as opposed to 
                      using 'Content here, content here', making it look like readable English. 
                      Many desktop publishing packages and web page editors now use Lorem Ipsum
                       as their default model text, and a search for 'lorem ipsum' will uncover
                </Text>
            </View>   
           
        </View>
        <View style={styles.containerExperience}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Experiencia</Text>
            </View> 
            <View style={styles.headerContainer}>
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
                source={{uri: "https://caprecruiter-production-static.s3.amazonaws.com/static/img/account_no_logo.png"}} />
        <View style={{paddingLeft: 10}}>
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
        
        <View style={styles.containerExperience}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Educação</Text>
            </View> 
            <View style={styles.headerContainer}>
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
        <View style={styles.containerExperience}>
              <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>Certifições</Text>
              </View> 
              <View style={styles.headerContainer}>
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
    containerExperience:{
        width: "100%",
        marginTop: 10,
        backgroundColor: "#fff",
        overflow: "hidden",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    containerFooter:{
     
        width: "100%",
        height: 60,
        backgroundColor: "black",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        
    },
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
        flexDirection: "row",
         alignItems: "center",
         justifyContent: "space-between",
         paddingRight: 20,
         paddingLeft: 10,
    },
    info:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
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
        fontSize: 14,
        fontWeight: "600",
    }

    
})