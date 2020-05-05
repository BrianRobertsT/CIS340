import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {

  const csuLogo = {
      uri:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fbrand.colostate.edu%2Fwp-content%2Fuploads%2Fsites%2F47%2F2019%2F01%2FRam-Logo-Pantone-375-768x768.jpg&imgrefurl=https%3A%2F%2Fbrand.colostate.edu%2Flogo%2F&tbnid=mpuCpYg1u7wqtM&vet=12ahUKEwi-obzO9pvpAhWLQa0KHZtuBZQQMygCegUIARCCAg..i&docid=_Z15Q8xcgOnJaM&w=768&h=768&q=csu%20logo&ved=2ahUKEwi-obzO9pvpAhWLQa0KHZtuBZQQMygCegUIARCCAg",

  }; 

  return (
    <View style={styles.container}>
      <ImageBackground source = {csuLogo} style = {styles.image}>
        <Text style = {styles.text}>CSU logo</Text>
      
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  
  text: {
    color: ReactDOM,
    fontSize: 50,
    fontWeight: 'bold'
  },

});
