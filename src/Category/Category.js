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

  constructor(){
    super();
    this.fields = [{
      id: 1,
      text: "Engineering"
    }, {
      id: 2,
      text: "Agriculture"
    }, {
      id: 3,
      text: "Business"
    } , {
      id: 4,
      text: "Communications"
    } , {
      id: 5,
      text: "Health Science"
    }, {
      id: 6,
      text: "Health Service"
    }
    ];
  }

  showQues(sentId){
      Actions.quiz(sentId);
  }
    
  render() {
    return (
      <View style={styles.container}>
        <ScrollView keyboardDismissMode='on-drag'>
        <Text style={styles.instruction}>Select a category</Text>

          {
            this.fields.map(( item, key ) =>
            (
              <TouchableOpacity 
                style={styles.category}
                onPress={() =>this.showQues({sentId: item.id})}
                key={key} >
                    <Text style={styles.categoryName}>{item.text}</Text>
              </TouchableOpacity>
            ))
          }
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
    height: 70,
    borderRadius: 5,
    backgroundColor: '#012C3D'
  },
  categoryName: {
    alignItems: 'center',
    alignSelf: 'center',
    color: '#fff',
    fontSize: 30,
  },
  instruction: {
    color: '#012C3D',
    fontSize: 20,
    alignItems: 'center',
    alignSelf: 'center',
  },
});
