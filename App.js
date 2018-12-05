
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, ScrollView, CameraRoll, Image, Dimensions, TouchableOpacity } from 'react-native';
// import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';
// import { Toolbar } from 'react-native-material-ui';
// import LinearGradient from 'react-native-linear-gradient';
import { SignInComponent ,SignUpComponent } from "./src/Components"
import Routers from "./src/index"

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      photos: []
    }
  }

  render() {
    return (
        <Routers />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
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
});
