/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Router, Scene } from 'react-native-router-flux';
import Splash from './src/Splash/Splash';

class App extends Component {
      
  render() {
    return (
      <Router 
      navigationBarStyle={{ backgroundColor: '#012C3D' }}
      >
        <Scene key='root'>
        <Scene key="splash" component={Splash}  initial />
          </Scene>
      </Router>
    );
  }
}


export default App;