import React from 'react';
import {Text, View, SectionList} from 'react-native';


export default StatesApp = () => {

  return(
    <View style = {{flex: 1, paddingTop: 22}}>
        <SectionList 
         sections={[{title: 'A', data: ['Alabama', 'Alaska', 'Arizona'] },
                    {title: 'C', data: ['Colorado', 'California', 'Connecticut']},
                    {title: 'D', data: ['Delaware']},
                    {title: 'F', data: ['Florida']},
                    {title: 'G', data: ['Georgia']},  
                    {title: 'H', data: ['Hawaii']}        
      
        
        ]}
          returnItem={({item}) => <Text style={{padding: 10, fontSize: 20, height: 44}}> {item.key} </Text>}
          renderSectionHeader={({section}) =>
        
          <Text style={{paddingTop: 4, paddingLeft: 10, paddingRight: 10, 
          fontSize: 16,
          fontWeight: 'bold',
          backgroundColor: '9FA8DA'}}> {section.title} </Text> }

          keyExtractor={(item,index) =>index}
        
        />


    </View>

  );
}
   
   

