import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {


  return (
    <View style={styles.container}>
        <Image source = {{uri: 'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/CSU-Ram-357-617.png'}}
        style = {styles.logo}>
        </Image>

        <Text style = {styles.insts}>Press the button to select an image</Text>


      <TouchableOpacity style={styles.button}
          onPress = {() => alert('Ypu have not selected an image')}>

        <Text style = {styles.buttonText}>Pick Image</Text>

      </TouchableOpacity>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',

  },

button: {
  alignItems: 'center',
  backgroundColor: '#FFFFE0',
  padding: 20,
  borderRadius: 5,

},

insts: {
  fontSize: 18,
  color: '#87CEFA',
  marginHorizontal: 15,
  marginBottom: 10,

},
logo: {
  width: 305,
  height: 300,
  marginBottom: 20,
},
buttonText: {
  fontSize: 20,
  color: '#fff',

}

});
