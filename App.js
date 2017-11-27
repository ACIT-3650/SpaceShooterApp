/* 
  A00892264
  ACIT 3650

  Must install!!!
   npm install
   npm install react-navigation --save
   npm install react-native-vector-icons --save
   npm install react-native-share --save
   react-native link
   
  Optional Dependencies (Was going to use but didn't)
   npm install react-native-fetch-blob --save
   npm install create-react-class --save
   npm install react-native-social-share --save
   npm install react-native-sketch --save
   
*/

import React, { Component } from 'react';
import { StyleSheet,
         Text,
         View } from 'react-native';
import { StackNavigator } from 'react-navigation';


import HomeScreenComponent from "./components/HomeScreenComponent";
import MainComponent from "./components/MainComponent";
import InfoComponent from "./components/InfoComponent";

const ImageApp = StackNavigator({
  Home: {
    screen: HomeScreenComponent
  },
  Main: {
    screen: MainComponent
  },
  Info: {
    screen: InfoComponent
 },
});

export default class App extends React.Component {

  render() {
    return (
        <ImageApp/>
    );
  }
}
