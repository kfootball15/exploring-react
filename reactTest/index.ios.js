/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

// You can create your own Components, like this "Greeting" component.
class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

// Everything that appears on the screen in ReactJS is some kind of Component
// 'Image' is an example of a React Native Component. To use it, you must import it above
class reactTest extends Component {
  render() {
    let pic = {
      uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    }
    return (
      <View style={styles.container}>
        <Image source={pic} style={{width:193, height:110}}/>
        <Text style={styles.poo}>
          Say Hello to your friends:
        </Text>
        <Greeting name="Buddy" />
        <Greeting name="Kitty" />
        <Greeting name="Biddy" />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  brown:{
    color: '#7c4e11'
  }
});

AppRegistry.registerComponent('reactTest', () => reactTest); // This defines the "Root Component"
