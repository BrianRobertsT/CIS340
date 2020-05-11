import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'


export default function App() {

const [selectedImage, setSelectedImage] = React.useState(null)

  let openImagePickerAsync = async() => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if(permissionResult.granted === false){
      alert('Permission is required');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

    if(pickerResult.cancelled === true){
      return;
    }

    setSelectedImage({localUri: pickerResult.uri});


  };

  if(selectedImage !== null){
    return(
      <View style = {styles.container}>
          <Image source = {{uri: selectedImage.uri}} style = {styles.selImage}></Image>
      </View>
    ) 
  }

  return (
    <View style={styles.container}>
        <Image source = {{uri: 'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/CSU-Ram-357-617.png'}}
        style = {styles.logo}>
        </Image>

        <Text style = {styles.insts}>Press the button to select an image</Text>


      <TouchableOpacity style={styles.button}
          onPress = {openImagePickerAsync}>

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

},
selImage: {
  width: 300,
  height: 300,
  resizeMode: 'contain',

}

});
