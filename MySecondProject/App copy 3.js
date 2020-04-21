import React from 'react';
import {Text, TextInput, View} from 'react-native';

export default function MyApp() {
  return (
    <View>
      <Text>
        {"\n\n\n\n\n\n\n"}
        Hello, I am CIS340 Student! {"\n"}
        </Text>
        <TextInput
        style = {{
          height: 40,
          borderColor: "gray",
          borderWidth: 1
        }}
        />
        </View>
  );
}

