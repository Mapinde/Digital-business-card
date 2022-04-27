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

const EditIntroScreen = ({navigation,  route}) => {
    const {nome, apelido, position, cidade, pais, sobre, interesse} = route.params;
    const [nomeInput, SetNome] = useState(nome)
    const [apelidoInput, SetApelido] = useState(apelido)
    const [positionInput, SetPosition] = useState(position)
    const [cidadeInput, SetCidade] = useState(cidade)
    const [paisInput, SetPais] = useState(pais)
    const [sobreInput, SetSobre] = useState(sobre)
    const [interesseInput, SetInteresse] = useState(interesse)
    const [email, SetEmail] = useState("")
    const [telefone1, SetTelefone1] = useState("")
    const [telefone2, SetTelefone2] = useState("")
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
            <InputComponent placeholder={"Primeiro Nome"}
                label="Primeiro Nome"
                value={nomeInput}
                setFunction={SetNome}
                type={"text"}
                autoFocus={true} />
            <InputComponent placeholder={"Ultimo Nome/Apelido"}
                label={"Apelido"}
                value={apelidoInput}
                setFunction={SetApelido}
                type={"text"}
             />
            <InputComponent placeholder={"Posição actual"}
                label="Posição"
                value={positionInput}
                setFunction={SetPosition}
                type={"text"}
            />
            <InputComponent placeholder={"Cidade ou Distrito"}
                label="Cidade"
                value={cidadeInput}
                setFunction={SetCidade}
                type={"text"}
            />
            <InputComponent placeholder={"País"} 
                label="País"
                value={paisInput}
                setFunction={SetPais}
                type={"text"}
            />
            <InputComponent placeholder={"Sobre"} 
                label="Sobre"
                value={sobreInput}
                multiline={true}
                numberOfLines={6}
                setFunction={SetSobre}
                type={"text"}
            />
            <InputComponent placeholder={"Interesse"} 
                label={"Interesse"}
                value={interesse}
                setFunction={SetInteresse}
                type={"text"}
                multiline={true}
                numberOfLines={6}

            />
            <InputComponent placeholder={"onelio.mapinde@gmail.com"} 
                label={"Email"}
                value={email}
                setFunction={SetEmail}
                type={"email"}

            />
            <InputComponent placeholder={"+258824215357"} 
                label={"Telefone 1"}
                value={telefone1}
                setFunction={SetTelefone1}
                type={"text"}

            />
            <InputComponent placeholder={"+258874215357"} 
                label={"Telefone 2"}
                value={telefone2}
                setFunction={SetTelefone2}
                type={"text"}

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

export default EditIntroScreen

const styles = StyleSheet.create({})