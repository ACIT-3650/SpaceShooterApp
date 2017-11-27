import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text,
 		 View,
  		 Button,
   		 StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class InfoComponent extends Component {

	static navigationOptions= {
		title: 'Info Page',
	};
	render() {

		return (
			<View style={styles.container}>
				<Text>About</Text>
				<Icon
				name="info-circle"
				size={150}
				color="green"
				/>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>

				<Text>KILL ALL THE ALIENS!!!!!</Text>
				<Text></Text>
				<Text></Text>
				<Text>Note: Play the other difficulties for an experience out of this world</Text>
				<Text></Text>
				<Text></Text>
				<Text>Version 2.0</Text>
				<Text>Author: RP, KT, ML</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BF5FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});