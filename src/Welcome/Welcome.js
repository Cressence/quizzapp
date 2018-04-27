import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { Button, Text } from 'native-base';

class Welcome extends Component {

      showField(){
        Actions.category();
    }

  render() {

    const backgroundImg = require('./../assets/pic3.jpg');
    const resizeMode = 'contain';

    return (
      <View style={styles.container}>
            <Image 
              source={backgroundImg}
              style={{
                backgroundColor: '#000',
                flex: 1,
                resizeMode,
                position: 'absolute',
                width: 970,
                height: '100%',
                justifyContent: 'center',}}
            />
        <View style={styles.textBox}>
            <Text style={styles.title}>
                Find the best path in achieving your dreams with QUIZZY
            </Text>
            
            <Button
            style={styles.button}
            onPress={this.showField}
             rounded>
              <Text style={styles.btnText}>
                Start
              </Text>
            </Button>
        </View>
      </View>
    );
  }
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2E4053',
    alignSelf: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginVertical: 20,
    marginHorizontal: 15,
    textAlign: 'center',
    color: '#fff',
    alignItems: 'center',
    alignSelf: 'center',
    fontFamily: 'lucida grande',
    opacity: 1,
  },
  btnText: {
      color: '#fff',
      alignItems: 'center',
    alignSelf: 'center',
    fontSize: 20,
  },
  textBox: {
    backgroundColor: '#000',
    opacity: 0.8,
    marginHorizontal: 40,
    marginVertical: '50%',
    padding: 20,
    flex: 1,
  },
});
