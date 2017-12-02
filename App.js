import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TouchableComponent from "./components/TouchableComponent";
import StatusBarComponent from "./components/StatusBarComponent";
import CameraRollComponent from "./components/CameraRollComponent";
import ListViewComponent from "./components/ListViewComponent";
import SlideShowComponent from "./components/SlideShowComponent";
import SpaceShip from "./components/SpaceShip";

export default class App extends React.Component {
  render() {
    return (
      <View>
          <SpaceShip/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
