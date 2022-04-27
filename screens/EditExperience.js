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
import { AntDesign, Ionicons, SimpleLineIcons, FontAwesome } from '@expo/vector-icons';

const EditExperience = ({navigation,  route}) => {
  const {position, campany, periodo, date, local, description} = route.params;
    const [positionInput, SetPosition] = useState(position)
    const [campanyInput, SetCampany] = useState(campany)
    const [periodoInput, SetPeriodo] = useState(periodo)
    const [dateInput, SetDate] = useState(new Date())
    const [openDate, setOpenDate] = useState(false)
    const [localInput, SetLocal] = useState(local)
    const [descritionInput, SetDescrition] = useState(description)
    
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
    {label: 'Tempo Inteiro', value: 'Tempo Inteiro'},
    {label: 'Contrato', value: 'Contracto'},
    {label: 'Tempo Parcial', value: 'Tempo Parcial'}
  ]);

  const openDataPicker = () => {
      setOpenDate(true)
  }
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
            
             <InputComponent 
                placeholder={"Cidade ou Distrito"}
                label="Cidade"
                type="text"
                setFunction={SetLocal}
                value={localInput}
             />
             
            <InputComponent 
                placeholder={"Descrição"}
                label="Descrição"
                type="text"
                numberOfLines={4}
                multiline={true}
                setFunction={SetDescrition}
                value={descritionInput}
             />
        <View style={{ width: "100%", alignItems: "center", height: 100, backgroundColor: "white",}}>
            <Button onPress={()=> {
                Keyboard.dismiss;
                navigation.navigate("Home", {
                    nome: nomeInput,
                    apelido: apelidoInput,
                    position: positionInput,
                    cidade: cidadeInput,
                    pais: paisInput,
                    sobre: sobreInput,
                    interesse: interesseInput,
                });
                
            }}
                title="SAVE"
                buttonStyle={{
                    backgroundColor: "#090B32",
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 30,
                }}
                containerStyle={{
                    width: 200,
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
                titleStyle={{ fontWeight: 'bold' }}
                />
        </View>
        </ScrollView> 
        </TouchableWithoutFeedback>    

        </KeyboardAvoidingView>
    </SafeAreaView>
    </>
  )
}

export default EditExperience

const styles = StyleSheet.create({})