/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View, TextInput, Image, TouchableHighlight,Platform,Alert,Dimensions
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {useDimensions} from "@react-native-community/hooks";

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
console.log(useDimensions())
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      paddingTop: Platform.OS === "android"?StatusBar.currentHeight:0
  };

  const handlePress  = () =>{
    Alert.alert('Are you sure that you want exit?',"Don't forget to rate us in Play Store",[
      {text: 'Yes', onPress: ()=>alert(4)},
      {text: 'No'}
    ])
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={{
        backgroundColor: 'orange',
        width: '100%',
        height: '30%'
      }}/>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    imageStyle:{
        width: 50,
        height: 50,
    }
});

// npx react-native run-android
//rm ~/.android/avd/Pixel_3a_API_30_x86.avd/*.loc
//adb devices

export default App;
