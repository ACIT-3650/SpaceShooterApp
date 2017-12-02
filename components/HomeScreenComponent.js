import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text,
 		 View,
  		 Button,
   		 StyleSheet,
   		 Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';



export default class HomeScreenComponent extends Component {

	static navigationOptions = {
		title: 'Space Invader', header: null
	};

	render() {
		const  {navigate} = this.props.navigation;
		return(
			<View style={styles.container}>
			 <Image  style={{
        		  flex: 1,
        		  position: "absolute"
        		}}source={require('../pictures/wallpaper.jpg')}> 	
				
			</Image>

			<Image source={require('../pictures/LOGO.png')}> 	
				
			</Image>
				<Text style={{fontSize: 25, fontWeight:'bold', color:'red'}}>
					ENTER WITH CAUTION
				</Text>

				<Button
					onPress={() => navigate('Main')}
					title="EASY"
					color="#FFA500"
				/>

				<Button
					onPress={() => navigate('Main')}
					title="MEDIUM"
					color="#FFA500"

				/>
				
				<Button
					onPress={() => navigate('Main')}
					title="HARD"
					color="#FFA500"
				/>

				<Image style={{width: 150, height: 150}} source={require('../pictures/helmet.png')}> 	
				
				</Image>
				

				<Button
					onPress={() => navigate('Info')}
					title="Instructions"
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  backgroundContainer: {
    flex: 1,
    resizeMode: 'cover',
    width: undefined,
    height: undefined,
    backgroundColor: '#889DAD',
  },
  text: {
    flex: 1,
    backgroundColor: '#39ff14',
  },
});