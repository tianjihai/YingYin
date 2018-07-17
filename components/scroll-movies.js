import React, {Component} from 'react'
import {
  View,Text,Image,ScrollView,StyleSheet,TouchableHighlight
} from 'react-native'
import TabBarBottom from 'react-navigation/src/views/TabView/TabBarBottom';

export default class ScrollMovies extends Component {
  render() {
    const navigate = this.props.navigate
    return (
      <ScrollView horizontal={true} style={styles.borderBottom}>
        <TouchableHighlight onPress={() => navigate('Brief', { id: this.props.list[0].id })}>
          <View style={styles.Item}>
            <Image style={styles.Image} source={{uri: this.props.list[0].images.small}} />
            <Text style={styles.Font}>{this.props.list[0].title}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigate('Brief', { id: this.props.list[1].id })}>
          <View style={styles.Item}>
            <Image style={styles.Image} source={{uri: this.props.list[1].images.small}} />
            <Text style={styles.Font}>{this.props.list[1].title}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigate('Brief', { id: this.props.list[2].id })}>
          <View style={styles.Item}>
            <Image style={styles.Image} source={{uri: this.props.list[2].images.small}} />
            <Text style={styles.Font}>{this.props.list[2].title}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigate('Brief', { id: this.props.list[3].id })}>
          <View style={styles.Item}>
            <Image style={styles.Image} source={{uri: this.props.list[3].images.small}} />
            <Text style={styles.Font}>{this.props.list[3].title}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigate('Brief', { id: this.props.list[4].id })}>
          <View style={styles.Item}>
            <Image style={styles.Image} source={{uri: this.props.list[4].images.small}} />
            <Text style={styles.Font}>{this.props.list[4].title}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigate('Brief', { id: this.props.list[5].id })}>
          <View style={styles.Item}>
            <Image style={styles.Image} source={{uri: this.props.list[5].images.small}} />
            <Text style={styles.Font}>{this.props.list[5].title}</Text>
          </View>
        </TouchableHighlight>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  Item: {
    marginLeft: 10,
    height: 220,
    backgroundColor: '#fff'
  },
  Image: {
    width: 140,
    height: 180,
    marginBottom: 10,
      borderRadius:20,
  },
  Font: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  borderBottom: {
    borderBottomColor: 'rgba(155,155,155,0.4)',
    borderBottomWidth: 0.8
  }
})
