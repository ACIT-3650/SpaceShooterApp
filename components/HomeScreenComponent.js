import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text,
 		 View,
  		 Button,
   		 StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class HomeScreenComponent extends Component {

	static navigationOptions = {
		title: 'Space Invader',
	};

	render() {
		const  {navigate} = this.props.navigation;
		return(
			<View style={styles.container}>

				
				<Text>SPACE INVADER SHOOTER 3.0</Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Button
					onPress={() => navigate('Main')}
					title="PLAY"
				/>
				<Button
					style={styles.text}
					onPress={() => navigate('Main')}
					title="EASY DIFFICULTY"
				/>
				<Button
					onPress={() => navigate('Main')}
					title="MEDIUM DIFFICULTY"
				/>
				<Button
					onPress={() => navigate('Main')}
					title="HARD DIFFICULTY"
				/>
				<Icon
				name="reddit-alien"
				size={200}
				color="green"
				/>

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
    backgroundColor: '#551A8B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    backgroundColor: '#39ff14',
  },
});