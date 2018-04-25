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
  

class Quiz extends Component {

      showField(){
        // Actions.category();
    }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView keyboardDismissMode='on-drag'>
            <View style={styles.quizBox}>
                <Text style={styles.title}>
                    Find the best path by shaping your dreams with appname
                </Text>
            </View>
        </ScrollView>
      </View>
    );
  }
}

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignSelf: 'center',
  },
  quizBox: {
    backgroundColor: '#ccc',
    padding: 10,
    marginHorizontal: 30,
    marginVertical: 150,
    height: 250,
  },
});
