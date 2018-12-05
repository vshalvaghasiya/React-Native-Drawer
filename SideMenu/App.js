/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import Drawer from 'react-native-drawer'

import MainView from './MyMainView';
import ControlPanel from './ControlPanel';

import styles from './styles';

const drawerStyles = {
  drawer: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 0,
  }
}

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {

    };
  }

  openDrawer() {
    this.drawer.open()
  }

  setStateFrag(frag) {
    this.setState(frag);
  }

  render() {
    var controlPanel = <ControlPanel closeDrawer={() => {
      this.drawer.close();
    }} />
    return (
      <Drawer
        ref={c => this.drawer = c}
        type='overlay'
        openDrawerOffset={80}
        content={controlPanel}
        styles={drawerStyles}
        tapToClose={true}
        side='left'
      >
        <MainView
          drawerType={this.state.drawerType}
          openDrawer={this.openDrawer.bind(this)}
        />
      </Drawer>
      

    );
  }
}
