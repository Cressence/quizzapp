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
import Splash from './src/Splash/splash';
import Welcome from './src/Welcome/Welcome';
import Category from './src/Category/Category';
import Quiz from './src/Quiz/Quiz';
import Result from './src/Result/Result';

class App extends Component {
      
  render() {
    return (
      <Router 
      navigationBarStyle={{ backgroundColor: '#012C3D' }}
      titleStyle={styles.navTitle}
      >
        <Scene key='root'>
        <Scene 
          key="splash" 
          component={Splash}  
          initial
          hideNavBar={true} />
        <Scene 
          key="welcome" 
          component={Welcome}
          leftButtonIconStyle={{tintColor: '#fff'}} 
          title="Passion" 
          hideNavBar={true} />
        <Scene 
          key="category" 
          component={Category}
          leftButtonIconStyle={{tintColor: '#fff'}} 
          title="Passion" 
          hideNavBar={true} />
          <Scene 
          key="quiz" 
          component={Quiz}
          leftButtonIconStyle={{tintColor: '#fff'}} 
          title="Question" 
          hideNavBar={true} />
          <Scene 
          key="result" 
          component={Result}
          leftButtonIconStyle={{tintColor: '#fff'}} 
          title="Congratulations" 
          hideNavBar={true} />
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