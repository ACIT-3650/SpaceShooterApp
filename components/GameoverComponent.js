import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text,
 		 View,
  		 Button,
   		 StyleSheet,
   		 Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class GameoverComponent extends Component {

	static navigationOptions= {
		title: 'Gameover Page',
	};
	render() {
		const  {navigate} = this.props.navigation;
		return (
			<View style={styles.container}>

				<Image  style={{
        		  	flex: 1,
        		  	position: "absolute"
        			}}source={require('../pictures/GameoverWallpaper.jpg')}> 	
				</Image>

				<Image source={require('../pictures/GameoverLogo.png')}> 
				</Image>

				
				<Text style={{fontSize: 22, fontWeight:'bold', color:'red'}}>Play again if you DARE</Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Button
					onPress={() => navigate('Main')}
					title="PLAY AGAIN"
					color="#FFFF00"
				/>
				<Button
					onPress={() => navigate('Home')}
					title="HOME SCREEN"
					color="#FFFF00"
				/>
				<Text></Text>
				<Text></Text>

				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Icon
					name="gamepad"
					size={100}
					color="yellow"
				/>
				
				<Text style={{fontSize: 10, fontWeight:'bold', color:'orange'}}>Version 3.0</Text>
				<Text></Text>
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