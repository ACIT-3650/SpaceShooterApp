import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StatusBar } from 'react-native';

export default class StatusBarComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			barStyle: this.props.barStyle

		}
	}

	static defaultProps = {
		barStyle: "light-content"
	}

	render() {
		return (
			<View>
			<StatusBar 
			backgroundColor="white"
			barStyle={this.state.barStyle}
			/>
			<Text>Test</Text>
			</View>
			)
	}
}

/*
	render() {
		return (
			<View>
				<StatusBar 
				backgroundColor='black'
				barStyle="light-content"
				/>
			</View>
		)
	}
}*/