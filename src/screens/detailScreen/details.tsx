/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   SafeAreaView,
   StatusBar,
   StyleSheet,
   Text,
   Button
 } from 'react-native';


 const DetailScreen = ({ navigation }) => {
   

   return (
     <SafeAreaView >
       <StatusBar  barStyle="light-content" />
       <Text style={{color:'white'}}>Detail</Text>
       <Button  
         title="Go to home"
         onPress={ () => navigation.navigate('Home') } />
     </SafeAreaView>
   );
 };

 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   }
 });

 export default DetailScreen;
