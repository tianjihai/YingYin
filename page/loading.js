import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.Image} source={require('../image/lemon-loading.gif')} />
        <Text>正在加载，请稍等 ...</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 10,
    paddingBottom: 10
  },
  Image: {
    width: 64,
    height: 64
  }
})
