/**
 * Created by renzo on 2017-11-27.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
            animationspeed: 1,
            showShoot: false,
            cooldown: false,
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

        if(this.state.animationspeed < 2){
            var animatedtiming = 0.05;
            this.state.animationspeed += animatedtiming;
        }


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

    _onPressButton(){//when the button is clicked it allows _renderShoot to create the image  
        if(this.state.cooldown == false){//prevents people from spamming shoot so they can only shoot once every 5 seconds
            this.state.cooldown = true;
            this.state.showShoot = true;
            this.setState(this.state);
            this.timeoutHandle = setTimeout(()=>{//after 5 seconds the image is removed by calling _resetShoot
                console.log("Done Shooting");
                this._resetShoot();
         }, 5000);   
         this.state.cooldown = false;         
        }
    }

    _renderShoot(){
    if (this.state.showShoot) {
            setCoords = this.refs.SpaceShipRef.getCoordinates();
            topsetCoords = setCoords.top;
            console.log(setCoords.left);

        const movenachoMOOOVE = this.animatedValue.interpolate({
            inputRange: [0,1],
            outputRange: [topsetCoords,-400]
        });
            return (
                <Animated.Image style={{width: 100, height: 100, top: movenachoMOOOVE, left: setCoords.left}} source={require('../assets/nacho.gif')}/>                                       
            );
        } else {
            return null;
        }
    }

    _resetShoot(){
        this.state.showShoot = false;
        this.setState(this.state);        
    }

    render(){
        const fall = this.animatedValue.interpolate({
            inputRange: [0,1],
            outputRange: [-100, this.state.windowHeight]
        });
        return(
            <View style={{flex: 1}}>
<Image  style={{
                  flex: 1,
                  position: "absolute"
                }}source={require('../pictures/wallpaper.jpg')}>    
                
            </Image>            
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
                        onPress={() => {
                            this._onPressButton();
                        }}
                        style = {{
                            width: 100,
                            height: 100,
                            position: "absolute",
                            bottom: 0, 
                            alignSelf: 'flex-end',

                        }}
                        disabled={this.state.showShoot}
                        >
                        <Image
                            style = {{
                                width: 100,
                                height: 100  
                            }}
                            source={require('../assets/shootbut.png')}
                        />
                    </TouchableHighlight>   
                    {this._renderShoot()}               
            </View>
        )
    }
}