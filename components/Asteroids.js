/**
 * Created by renzo on 2017-12-01.
 */
import React, { Component } from 'react';
import {StyleSheet, Text, View,  Animated, Easing, Dimensions, Image} from 'react-native';

export  default class Asteroids extends Component {
    // constructor(props){
    //     super(props);
    //     this.animatedValue = props.animatedValue;
    //     this.windowHeight = props.windowHeight;
    // }
    render(){
        return(

            <Animated.Image source={{uri: 'http://www.clipartlord.com/wp-content/uploads/2016/04/aestroid.png'}}
                            style={{width: 100, height: 100, top: this.props.fall, left: this.props.projectilePosition}}
            >
            </Animated.Image>
        )
    }
}
