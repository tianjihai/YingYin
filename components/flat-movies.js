import React, { Component } from 'react'
import api from '../api/api'
import {
  FlatList,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions
} from 'react-native'

export default class FlatMovie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allList: [],
      list: [],
      refreshing: false,
      loading: true
    }
  }
  componentWillMount() {
    let list = []
    for (let i = 0; i < 5; i++) {
      list.push(this.props.list[i])
    }
    this.setState({
      list: list,
      allList: this.props.list
    })
  }
  render() {
    return (
      <View>
        <FlatList
          onRefresh={() => {
            this.refresh()
          }}
          onEndReached = {() => this.add()}
          onEndReachedThreshold={0.1}
          refreshing={this.state.refreshing}
          data={this.state.list}
          renderItem={({item}) => this.renderMovies(item)}
          keyExtractor={(item) => item.id}
          ListFooterComponent={this.renderLoading()}
        />
      </View>
    )
  }

  add () {
    let listTemp = []
    let i = this.state.list.length
    for (let n = 0; n < i + 5 && n < this.state.allList.length; n++) {
      listTemp.push(this.state.allList[n])
    }
    if (this.state.list.length < this.state.allList.length) { 
      this.setState({
        list: listTemp
      })
    }
    if (this.state.list.length === this.state.allList.length) {
      this.setState({
        loading: false
      })
    }
  }
  refresh () {
    if (this.props.type === 'coming') {
      this.setState({
        refreshing: true
      })
      api.getComingList()
        .then(res => res.json())
        .then(resData => {
          let list = []
          for (let i = 0; i < 5; i++) {
            list.push(resData.subjects[i])
          }
          this.setState({
            allList: resData.subjects,
            list: list,
            refreshing: false
          })
        })
    } else {
      this.setState({
        refreshing: true
      })
      api.getHotMoiveList()
        .then(res => res.json())
        .then(resData => {
          let list = []
          for (let i = 0; i < 5; i++) {
            list.push(resData.subjects[i])
          }
          this.setState({
            allList: resData.subjects,
            list: list,
            refreshing: false
          })
        })
    }
  }

  renderMovies (movie) {
    const navigate = this.props.navigate
    if (!movie.casts.length) return (
      <TouchableHighlight onPress={() => navigate('Brief', { id: movie.id })}>
        <View style={[styles.container, styles.borderBottom]} >
          <Image 
            source={{uri: movie.images.small}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer} >
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.detail}>年份：{movie.year}</Text>
            <Text style={styles.detail}>分类：{movie.genres[0]},{movie.genres[1]}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
    return (
      <TouchableHighlight onPress={() => navigate('Brief', { id: movie.id })}>
        <View style={[styles.container, styles.borderBottom]} >
          <Image 
            source={{uri: movie.images.small}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer} >
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.detail}>年份：{movie.year}</Text>
            <Text style={styles.detail}>分类：{movie.genres[0]},{movie.genres[1]}</Text>
            <Text style={styles.detail}>主演：{movie.casts[0].name}/{movie.casts[1].name}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  } 
  renderLoading () {
    if (this.state.loading) {
      return (
        <View style={styles.loadingWapper}>
          <Image style={styles.loading} source={require('../image/circle-loading.gif')} />
        </View>
      )
    } else {
      return (
        <View style={styles.loadingWapper}>
          <Text>我是有底线的哦！</Text>
        </View>
      )
    }
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
    paddingTop: 20,
    paddingBottom: 20
  },
  thumbnail: {
    width: 100,
    height: 140,
    marginLeft: 20
  },
  rightContainer: {
    flex: 1,
    paddingLeft: 20,
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
  },
  loadingWapper: {
    width: Dimensions.get("window").width,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  loading: {
    width: 40,
    height: 40
  }
})
