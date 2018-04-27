/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  View,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Splash extends Component {
    componentDidMount() {
        setTimeout(() => Actions.welcome(), 3000);
      }
      
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./../assets/quiz.gif')} style={styles.logo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E4053',
  },
  logo: {
    flex: 1,
    width: 300,
    height: 300,
    resizeMode: 'contain'
  },
});

export default Splash;