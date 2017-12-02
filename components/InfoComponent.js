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
				<Icon
				name="reddit-alien"
				size={200}
				color="green"
				/>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>

				<Text>KILL ALL THE ALIENS and SURVIVE!!!!!</Text>
				<Text></Text>
				<Text></Text>
				<Text>Note: Play the other difficulties for an experience out of this world</Text>
				<Text></Text>
				<Text></Text>
				<Text>Version 3.0</Text>
				<Text>Author: RP, KT, ML</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});