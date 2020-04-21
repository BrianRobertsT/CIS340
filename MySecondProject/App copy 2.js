import React from 'react';
import {Text} from 'react-native';

export default function MyApp() {

  function getFullName(fName, mName, lName){
    return fName + " " + mName + " " + lName;
  }
  
  const pet = "Dog";
  return (
    
      <Text>
        {"\n\n\n\n\n\n\n"}
        Hello, I am CIS340 Student! {"\n"}
        My full name is {getFullName("Brian", "Tomas", "Roberts")} {"\n"}
        I have a {pet}!
        </Text>
    
  );
}

