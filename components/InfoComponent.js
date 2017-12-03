import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text,
 		 View,
  		 Button,
   		 StyleSheet,
   		 Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class InfoComponent extends Component {

	static navigationOptions= {
		title: 'Info Page',
	};
	render() {

		return (
			<View style={styles.container}>

				<Image  style={{
        		  	flex: 1,
        		  	position: "absolute"
        			}}source={require('../pictures/wallpaper.jpg')}> 	
				</Image>
				<Text></Text>
				<Text></Text>
				<Text style={{fontSize: 19, fontWeight:'bold', color:'orange'}}>-- Welcome to Space In Vader 3.0 --</Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Icon
				name="reddit-alien"
				size={100}
				color="green"
				/>
				
				<Text></Text>
				<Text style={{fontSize: 20, fontWeight:'bold', color:'red'}}>RULES: </Text>
				
				<Text></Text>
				<Text style={{fontSize: 18, fontWeight:'bold', color:'red'}}>1. Do not have mercy</Text>
				<Text></Text>
				<Text style={{fontSize: 18, fontWeight:'bold', color:'red'}}>2. Stay alive</Text>
				<Text></Text>
				<Text style={{fontSize: 18, fontWeight:'bold', color:'red'}}>3. One shot per 5secs</Text>
				<Text></Text>
				<Text style={{fontSize: 18, fontWeight:'bold', color:'red'}}>4. KILL ALL THE ALIENS!!!!</Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>

				<Text></Text>
				<Text style={{fontSize: 15, fontWeight:'bold', color:'orange'}}>Note: Try all the difficulties for an experience out of this world! :)</Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>

				
				
				<Text style={{fontSize: 10, fontWeight:'bold', color:'orange'}}>Version 3.0</Text>
				<Text style={{fontSize: 7, fontWeight:'bold', color:'orange'}}>Authors: RP, KT, ML</Text>

			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});