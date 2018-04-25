import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';
  

class Welcome extends Component {

      showField(){
        Actions.category();
    }

  render() {
    return (
      <View style={styles.container}>
        <View>
            <Image source={require('./../assets/pic1.png')} style={styles.animation} />
        </View>
        <View>
            <Image source={require('./../assets/logo.png')} style={styles.animation2} />
        </View>
        <View>
            <Text style={styles.title}>
                Find the best path by shaping your dreams with appname
            </Text>
        </View>

        <TouchableOpacity 
        style={styles.button}
        onPress={this.showField}>
            <Text style={styles.btnText}>
            Take Quiz
            </Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  button: {
    backgroundColor: '#012C3D',
    padding: 10,
    marginHorizontal: 80,
  },
  title: {
    fontSize: 30,
    marginVertical: 50,
    marginHorizontal: 60,
    textAlign: 'center',
    color: '#012C3D',
    alignItems: 'center',
    alignSelf: 'center',
    fontFamily: 'lucida grande',
  },
  btnText: {
      color: '#fff',
      alignItems: 'center',
    alignSelf: 'center',
    fontSize: 20,
  },
  animation: {
      height: 80,
      width: 80,
      marginTop: 65,
      marginLeft: 30,
      transform: [{ rotate: '-45deg'}],
  },
  animation2: {
    height: 80,
    width: 80,
    marginTop: -70,
    marginLeft: 260,
    transform: [{ rotate: '45deg'}],
}
});
