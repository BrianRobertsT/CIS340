import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  const csuLogo = {
      uri:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fbrand.colostate.edu%2Fwp-content%2Fuploads%2Fsites%2F47%2F2019%2F01%2FRam-Logo-Pantone-375-768x768.jpg&imgrefurl=https%3A%2F%2Fbrand.colostate.edu%2Flogo%2F&tbnid=mpuCpYg1u7wqtM&vet=12ahUKEwi-obzO9pvpAhWLQa0KHZtuBZQQMygCegUIARCCAg..i&docid=_Z15Q8xcgOnJaM&w=768&h=768&q=csu%20logo&ved=2ahUKEwi-obzO9pvpAhWLQa0KHZtuBZQQMygCegUIARCCAg",
      width: 80,
      height: 80,

  }; 

  return (
    <View style={styles.container}>
      <Image style = {styles.localCSUlogo}
        source = {require('./assets/local.png')}
      />

      <Image style={styles.urlCSUlogo}>
        source = {{
          uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbrand.colostate.edu%2Flogo%2F&psig=AOvVaw2Y8jVeuul4gi2bZg4_U4YG&ust=1588740743392000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNi0wc_2m-kCFQAAAAAdAAAAABAD"
        }}
      </Image>

         <Image 
          style = {styles.stretchlogo}
          source = {csuLogo}/> 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,

  },

  localCSUlogo: {
    width: 55,
    height: 65,
  },
  
  urlCSUlogo: {
    width: 50,
    height: 50,
  },

  stretchlogo: {
    
    height: 200,
    resizeMode: 'center',
  }

});
