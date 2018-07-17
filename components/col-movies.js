import React, { Component } from 'react'
import {
  View,Text,Image,TouchableHighlight,StyleSheet
} from 'react-native'

export default class ColMovies extends Component {
  render() {
    const navigate = this.props.navigate
    return (
      <View>
        <TouchableHighlight onPress={() => navigate('Brief', { id: this.props.list[0].id })}>
          <View style={[styles.container, styles.borderBottom]} >
            <Image 
              source={{uri: this.props.list[0].images.small}}
              style={styles.thumbnail}
            />
            <View style={styles.rightContainer} >
              <Text style={styles.title}>{this.props.list[0].title}</Text>
              <Text style={styles.detail}>{this.props.list[0].year}/{this.props.list[0].genres[0]},{this.props.list[0].genres[1]}/{this.props.list[0].casts[0].name}/{this.props.list[0].casts[1].name}</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigate('Brief', { id: this.props.list[1].id })}>
          <View style={[styles.container, styles.borderBottom]} >
            <Image 
              source={{uri: this.props.list[1].images.small}}
              style={styles.thumbnail}
            />
            <View style={styles.rightContainer} >
              <Text style={styles.title}>{this.props.list[1].title}</Text>
              <Text style={styles.detail}>{this.props.list[1].year}/{this.props.list[1].genres[0]},{this.props.list[1].genres[1]}/{this.props.list[1].casts[0].name}/{this.props.list[1].casts[1].name}</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigate('Brief', { id: this.props.list[2].id })}>
          <View style={[styles.container, styles.borderBottom]} >
            <Image 
              source={{uri: this.props.list[2].images.small}}
              style={styles.thumbnail}
            />
            <View style={styles.rightContainer} >
              <Text style={styles.title}>{this.props.list[2].title}</Text>
              <Text style={styles.detail}>{this.props.list[2].year}/{this.props.list[2].genres[0]},{this.props.list[2].genres[1]}/{this.props.list[2].casts[0].name}/{this.props.list[2].casts[1].name}</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigate('Brief', { id: this.props.list[3].id })}>
          <View style={[styles.container, styles.borderBottom]} >
            <Image 
              source={{uri: this.props.list[3].images.small}}
              style={styles.thumbnail}
            />
            <View style={styles.rightContainer} >
              <Text style={styles.title}>{this.props.list[3].title}</Text>
              <Text style={styles.detail}>{this.props.list[3].year}/{this.props.list[3].genres[0]},{this.props.list[3].genres[1]}/{this.props.list[3].casts[0].name}/{this.props.list[3].casts[1].name}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  borderBottom: {
    borderBottomColor: 'rgba(155,155,155,0.15)',
    borderBottomWidth: 0.8
  },

  imageTop: {
    flex: 1,
    height: 100
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10
  },
  thumbnail: {
    width: 80,
    height: 100,
    marginLeft: 10
  },
  rightContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8
  },
  detail: {
    color: 'rgb(155,155,155)'
  },
  list: {
    paddingTop: 20,
    backgroundColor: '#fff'
  }
})

