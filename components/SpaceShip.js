/**
 * Created by renzo on 2017-11-27.
 */
import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, Animated, Easing, Dimensions} from 'react-native';
// import sample from 'lodash.sample';

import AnimatedSprite from 'react-native-animated-sprite';
import SpaceShipSprite from './SpaceShipSprite';

export default class SpaceShip extends Component {
    constructor() {
        super();
        this.animatedValue = new Animated.Value(0);
        this.state = {
            animationType: 'IDLE',
            windowWidth: Dimensions.get('window').width,
            windowHeight: Dimensions.get('window').height,
            projectilePosition: 0
        };
    }
    componentDidMount(){
        this.animate();
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
    animate() {
        this.setState({
            projectilePosition: this.getRandomInt(1, this.state.windowWidth)
        });
        this.animatedValue.setValue(0);
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear
            }
        ).start(() => this.animate())
    }
    render(){
        const  fall = this.animatedValue.interpolate({
            inputRange: [0,1],
            outputRange: [-100, this.state.windowHeight]
        });
        const viewPosition = ((0 - this.state.windowHeight) / 2);
        return(
            <View style={{flex: 1}}>
                <Animated.Image style={{width: 100, height: 100, top: fall, left: this.state.projectilePosition}} source={{uri: 'http://www.clipartlord.com/wp-content/uploads/2016/04/aestroid.png'}}/>
                <View style={{height: 150, width: this.state.windowWidth, backgroundColor: 'red', bottom: viewPosition}}>
                    <AnimatedSprite
                        sprite={SpaceShipSprite}
                        coordinates={{
                            top: 100,
                            left: 100,
                        }}
                        animationFrameIndex={SpaceShipSprite.animationIndex(this.state.animationType)}
                        loopAnimation={false}
                        size={{
                            width: SpaceShipSprite.size.width,
                            height: SpaceShipSprite.size.height,
                        }}
                        draggable={true}
                    />
                </View>
            </View>
        )
    }
}