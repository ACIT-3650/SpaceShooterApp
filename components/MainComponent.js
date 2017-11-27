import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text,
 		 View,
  		 ActivityIndicator,
   		 Image,
         StyleSheet,
         AppRegistry,
         TouchableOpacity,
         Button } from 'react-native';
import { ImagePicker } from 'expo';

import Share, {ShareSheet} from 'react-native-share';

import Icon from 'react-native-vector-icons/FontAwesome';
import StatusBarComponent from "./StatusBarComponent";


export default class MainComponent extends Component {

	static navigationOptions= {
		title: 'Space Invader'
	};


	constructor(props) {
		super(props);
		this.state = {
			image: "http://dustyroom.com/wp-content/uploads/2017/01/empty-featured2-1.png"
		}
	}

	onCancel() {
    console.log("CANCEL")
    this.setState({visible:false});
  }

	render() {
		const  {navigate} = this.props.navigation;

		return (
			<View style={styles.container}>
				

				<StatusBarComponent/>

				<Icon
				name="space-shuttle"
				size={200}
				color="blue"
				/>
				
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    top: 7,
  },
  containerDraw: {
  	flex: 1,
  	paddingTop: 20,
  }
});