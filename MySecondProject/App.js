import React from 'react';
import {Text, TextInput, View} from 'react-native';

export default function MyApp() {
  return (
    <View>
      <Text>
        {"\n\n\n\n\n\n\n"}
        Hello, I am CIS340 Student! {"\n"}
        </Text>
        </View>
  );
}

export defualt function MultiComp(){
  return{

    <View style = {{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
    }}>
    <Text>
        {"\n\n\n\n\n\n\n"}
        Welcome to my class
        </Text>
        <MyApp />
        <MyApp />
        <MyApp />
        <MyApp />

    </View>
  }
}