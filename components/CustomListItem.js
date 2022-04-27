import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ListItem, Avatar } from 'react-native-elements'



const CustomListItem = ({id, userName, position, enterChat}) => {
    const [chatMessage, setChatMessage] = useState([]);

    useEffect(()=>{
        
    }, []);

  return (
    <ListItem onPress={()=> enterChat(id, userName, position)} key={id} bottomDivider> 
      <Avatar
      rounded
      source={{uri: "https://connectingcouples.us/wp-content/uploads/2019/07/avatar-placeholder.png"}}
      />
      <ListItem.Content>
          <ListItem.Title style={{fontWeight: 'bold'}}>
              {userName}
          </ListItem.Title>
          <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
              {position}
          </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )
}

export default CustomListItem

const styles = StyleSheet.create({})