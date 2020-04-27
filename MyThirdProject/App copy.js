import React from 'react';
import {Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text>Hey, my name is {props.name}, I am student in CIS340!</Text>
    </View>
  );
}

export default function MultiComp(){
  return(
    <View style = {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
    <Text> Welcome to CIS 340</Text>
    <Student name="Brian Roberts"/>
    <Student name="Elliott"/>
    <Student name="Jared"/>
    <Student name="Bill"/>
    </View>
  );

}

