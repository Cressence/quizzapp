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
        // setTimeout(() => Actions.welcome(), 3000);
      }
      
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./../assets/logo.png')} style={styles.logo} />
        <Text style={styles.appname}>Appname</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#012C3D',
  },
  logo: {
    height:  100,
    width: 100,
    borderRadius: 50,
  },
  appname: {
    color: "#fff",
    fontSize: 30,
    marginTop: 5,
  },
});

export default Splash;