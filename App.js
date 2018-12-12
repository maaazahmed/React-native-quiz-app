import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Routers from "./src/index"
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';
// import { Toolbar } from 'react-native-material-ui';
import {Provider} from "react-redux" 
import store from "./src/store/index"


export default class MainComponent extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routers />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
});
