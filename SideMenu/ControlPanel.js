import React, { Component } from 'react';
import {
  SwitchIOS,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';

import styles from './styles';
import Button from './Button';
import { menuArray } from './Constant';

let selectedIndex = 1;
export default class ControlPanel extends Component {
  render() {
    return (
      <SafeAreaView style={styles.controlPanel}>
        <View >
          {
            menuArray.map((item, index) =>
              <View
                key={`index-${index}`} style={{
                  padding: 10,
                  borderBottomColor: '#000',
                  borderBottomWidth: 1
                }}
              >
                <TouchableOpacity onPress={() => this.props.closeDrawer()} >
                  <Text style={{ color: 'white', letterSpacing: 1, width: '100%' }} >
                    {item}
                  </Text>
                </TouchableOpacity>
              </View>
            )
          }
        </View>
      </SafeAreaView>
    )
  }
}