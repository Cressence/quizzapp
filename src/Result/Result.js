import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

class Result extends Component {

  render() {
    var fieldId = this.props.sentId;
    return (
      <View style={styles.container}>
      {this.props.result?
        <View>
            <Text style={styles.title}> Congratulations!!</Text> 
            <Text style={styles.title}> You well placed to study {this.props.result} engineering</Text> 
        </View>
        : <Text style={styles.title}> Please comlete the quizz</Text> 
      }
      </View>
    );
  }
}

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  quizBox: {
    backgroundColor: '#ccc',
    padding: 10,
    marginVertical: 30,
    height: 250,
    width: 350,
  },title: {
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 25,
    color: '#012C3D',
    marginVertical: 50,
    marginHorizontal: 40,
  },
});
