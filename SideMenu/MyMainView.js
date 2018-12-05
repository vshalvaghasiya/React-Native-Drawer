import React, { Component } from 'react';
import {
  Switch,
  SliderIOS,
  PickerIOS,
  PickerItemIOS,
  View,
  ScrollView,
  Text,
  StyleSheet,
  Platform,
  SafeAreaView
} from 'react-native';

import styles from './styles';
import Button from './Button';

export default class MyMainView extends Component {
  setParentState(args) {
    this.props.setParentState(args)
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
        <View style={styles.container}>
          <View >
            <Button
              onPress={this.props.openDrawer}
              text="Menu"
            />
          </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
