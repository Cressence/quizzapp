import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';
  
// Todo: add good font family to categoryName
// Todo: style the entire screen
class Category extends Component {

      showQuestion(){
        Actions.quiz();
    }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView keyboardDismissMode='on-drag'>
        <Text style={styles.instruction}>Select a category</Text>
            <TouchableOpacity 
            style={styles.category}
            onPress={this.showQuestion}>
                <Text style={styles.categoryName}>Engineering</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.categoryTwo}
            onPress={this.showQuestion}>
                <Text style={styles.categoryName}>Engineering</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.categoryThree}
            onPress={this.showQuestion}>
                <Text style={styles.categoryName}>Engineering</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.categoryFour}
            onPress={this.showQuestion}>
                <Text style={styles.categoryName}>Engineering</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.categoryFive}
            onPress={this.showQuestion}>
                <Text style={styles.categoryName}>Engineering</Text>
            </TouchableOpacity>
        </ScrollView> 
      </View>
    );
  }
}

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 20,
  },
  category: {
    padding: 10,
    marginHorizontal: 60,
    marginVertical: 15,
    backgroundColor: 'darkblue',
    height: 70,
    borderRadius: 5,
  },
  categoryTwo: {
    padding: 10,
    marginHorizontal: 60,
    marginVertical: 15,
    backgroundColor: 'purple',
    height: 70,
    borderRadius: 5,
  },
  categoryThree: {
    padding: 10,
    marginHorizontal: 60,
    marginVertical: 15,
    backgroundColor: 'violet',
    height: 70,
    borderRadius: 5,
  },
  categoryFour: {
    padding: 10,
    marginHorizontal: 60,
    marginVertical: 15,
    backgroundColor: 'grey',
    height: 70,
    borderRadius: 5,
  },
  categoryFive: {
    padding: 10,
    marginHorizontal: 60,
    marginVertical: 15,
    backgroundColor: 'skyblue',
    height: 70,
    borderRadius: 5,
  },
  categoryName: {
    alignItems: 'center',
    alignSelf: 'center',
    color: '#fff',
    fontSize: 30,
  },
  instruction: {
    color: '#fff',
    fontSize: 20,
    alignItems: 'center',
    alignSelf: 'center',
  },
});
