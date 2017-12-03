
import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, Animated, Easing, Dimensions, TouchableHighlight, Image} from 'react-native';
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
            projectilePosition: 0,
            animationspeed: 1
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
                    var cheese;
            cheese = this.state.windowWidth - 200;
        this.setState({
            projectilePosition: this.getRandomInt(1, cheese)
        });

        if(this.state.animationspeed < 2){
            var animatedtiming = 0.05;
            this.state.animationspeed += animatedtiming;
        }
        console.log(this.state.animationspeed);
        var refreshIntervalId;
        // var test;
        // refreshIntervalId = setInterval(() => {
        //     test = this.refs.SpaceShipRef.getCoordinates();
        //     //console.log(test);
        //     console.log(test);
        //     console.log(this.state.projectilePosition);


        //     // if(this.state.moveEnemyval._value > windhowH - 280 
        //     //     && this.state.moveEnemyval._value < windowH -180
        //     //     && this.state.playerSide == this.state.enemySide){
        //     //         console.log("Hit");
        //     // }
        // }, 50);

        this.animatedValue.setValue(0);
        Animated.timing(
            this.animatedValue,
            {
                toValue: this.state.animationspeed,
                duration: 2000,
                easing: Easing.linear
            }
        ).start(() => this.animate())
    }

    _onPressButton(){
        console.log("CLICKED");
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
                <View>
                
                    <AnimatedSprite
                        ref={"SpaceShipRef"}
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
                    <TouchableHighlight 
                        style = {{
                            width: 100,
                            height: 100,
                            position: "absolute",
                            bottom: 0, 
                            alignSelf: 'flex-end',

                        }}
                        onPress={this._onPressButton}>
                        <Image
                            style = {{
                                width: 100,
                                height: 100  
                            }}
                            source={require('../assets/shootbut.png')}
                        />
                    </TouchableHighlight>                   
            </View>
        )
    }
}