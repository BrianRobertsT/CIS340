import React, {useState} from 'react';
import {Text, Button, View } from 'react-native';

function TV(props) {
  
  const [isOff, setIsOff] = useState(true);
return(
  <View>
    {"\n\n\n\n"}
<Text>This is {props.name} TV, and is {isOff ? "Is Off" : "Turned Me On"}</Text>
  
  <Button 
    onPress={() => {
      setIsOff(false);
    }}
    disabled ={!isOff}
    title={isOff ? "Turn me on, please!" : "Thank You!"}
    />
  </View>
);
}
export default function MultiTVs(){
  return(
    <View>
    <TV name="LG"/>
    <TV name="Sony"/>
    </View>
  );

}

