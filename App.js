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
import Welcome from './src/Welcome/Welcome';

class App extends Component {
      
  render() {
    return (
      <Router 
      navigationBarStyle={{ backgroundColor: '#012C3D' }}
      titleStyle={styles.navTitle}
      tabs
      >
        <Scene key='root'>
        <Scene key="splash" component={Splash}  initial />
        <Scene 
          key="welcome" 
          component={Welcome}
          leftButtonIconStyle={{tintColor: '#fff'}} 
          title="Appname" 
          hideTabBar />
          </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  navTitle: {
    color: 'white', 
    marginHorizontal: 80,
  }
})

export default App;