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
import { Header, Left, Body, Button, Icon, Title } from 'native-base';
  
// Todo: add good font family to categoryName
// Todo: style the entire screen

class Category extends Component {

  constructor(){
    super();
    this.fields = [{
      id: 1,
      text: "Engineering",
      icon: "print"
    }, {
      id: 2,
      text: "Agriculture",
      icon: "cog"
    }, {
      id: 3,
      text: "Business",
      icon: "film"
    } , {
      id: 4,
      text: "Communications",
      icon: "flame"
    } , {
      id: 5,
      text: "Health Science",
      icon: "bulb"
    }, {
      id: 6,
      text: "Health Service",
      icon: "eye"
    }
    ];
  }

  showQues(sentId){
      Actions.quiz(sentId);
  }

  back(){
    Actions.welcome();
}
    
  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button transparent
            onPress={this.back}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title style={{fontFamily: 'lucida grande'}}>QUIZZY</Title>
          </Body>
        </Header>
        <ScrollView keyboardDismissMode='on-drag'>
        <Text style={styles.instruction}>Select a category</Text>

          {
            this.fields.map(( item, key ) =>
            (
              <Button
                style={styles.category}
                onPress={() =>this.showQues({sentId: item.id})}
                key={key}
                block
               iconLeft >
                <Icon name={item.icon} />
                <Text style={styles.categoryName}>{item.text}</Text>
              </Button>
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
    backgroundColor: '#283747',
  },
  category: {
    marginHorizontal: 20,
    marginVertical: 5,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#2E4053',
  },
  header : {
    backgroundColor: '#283747',

  },
  categoryName: {
    color: '#fff',
    fontSize: 20,
    marginHorizontal: 60,
    marginVertical: 40,
  },
  instruction: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 10,
    marginHorizontal: 20
  },
});
