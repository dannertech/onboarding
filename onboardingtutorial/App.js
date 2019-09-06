/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';


import Onboarding from 'react-native-onboarding-swiper';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';



export default class App extends Component {
  state = {
    onboardingCompleted: true,
  }
render(){

  return(
    this.state.onboardingCompleted ? (
  
      <View>
        <Text>This is a test to see if this shit works</Text>
        </View>
      )
      : (<Onboarding
    pages={[
      {
        backgroundColor: '#29451E',
        image: <Image source={require('./images/run-away_4.gif')} />,
        title: 'Welcome!',
        subtitle: 'This is a demo Welcome Screen'
      },
      {
        backgroundColor: '#29451E',
        image: <Image source={require('./images/map-rounded-corners.png')} />,
        title: 'Second Page',
        subtitle: 'This is a demo Second Screen',
      }
    ]}
      
    
      />)
  );
}
}
